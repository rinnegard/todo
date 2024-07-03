"use server";

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createTodo(value: string) {
    console.log("Create Todo");

    await prisma.todo.create({
        data: {
            value,
        },
    });

    revalidatePath("/todo");
}

export async function deleteTodo(id: string) {
    await prisma.todo.delete({
        where: {
            id,
        },
    });

    revalidatePath("/todo");
}

type UpdateTodo = {
    completed?: boolean;
    value?: string;
};

export async function updateTodo(id: string, newTodo: UpdateTodo) {
    await prisma.todo.update({
        where: {
            id: id,
        },
        data: newTodo,
    });

    revalidatePath("/todo");
}
