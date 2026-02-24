"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Input, Button } from "@heroui/react";

interface NdaGateProps {
    isOpen: boolean;
    onSuccess: () => void;
}

export function NdaGate({ isOpen, onSuccess }: NdaGateProps) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/cases/verify-nda", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (data.success) {
                onSuccess();
            } else {
                setError("Неверный пароль");
            }
        } catch {
            setError("Ошибка проверки");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            isDismissable={false}
            hideCloseButton
            classNames={{
                base: "rounded-2xl border border-[rgba(16,16,16,0.1)]",
                header: "border-b border-[rgba(16,16,16,0.1)]",
            }}
        >
            <ModalContent>
                <form onSubmit={handleSubmit}>
                    <ModalHeader className="flex flex-col gap-1">
                        <span className="font-nevermind text-[20px] text-[#101010]">
                            Доступ по паролю
                        </span>
                        <span className="text-sm font-normal text-[rgba(16,16,16,0.6)]">
                            Этот кейс под NDA. Введите пароль для просмотра.
                        </span>
                    </ModalHeader>
                    <ModalBody className="gap-4 pb-6">
                        <Input
                            type="password"
                            placeholder="Пароль"
                            value={password}
                            onValueChange={setPassword}
                            isInvalid={!!error}
                            errorMessage={error}
                            variant="bordered"
                            radius="lg"
                            classNames={{
                                input: "text-[#101010]",
                                inputWrapper: "border-[rgba(16,16,16,0.2)]",
                            }}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            isLoading={loading}
                            className="bg-[#101010] text-white rounded-xl"
                        >
                            Войти
                        </Button>
                    </ModalBody>
                </form>
            </ModalContent>
        </Modal>
    );
}
