"use client";
import { UseFormRegister } from "react-hook-form";

type Props = {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

export default function CampoVisitante({ index, register }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label>Nome {index + 1}</label>
        <input
          {...register(`visitantes.${index}.nome`)}
          className="w-full border p-2 rounded"
        />
      </div>
      <div>
        <label>Fone {index + 1}</label>
        <input
          {...register(`visitantes.${index}.fone`)}
          className="w-full border p-2 rounded"
        />
      </div>
    </div>
  );
}
