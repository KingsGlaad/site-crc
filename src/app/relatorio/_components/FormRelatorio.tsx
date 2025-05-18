/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { relatorioSchema, RelatorioData } from "@/lib/schemaRelatorio";
import CampoVisitante from "./CampoVisitante";
import { useEffect, useState } from "react";
import { celulas } from "@/data/site-data";
import { toast } from "sonner";

export default function FormRelatorio() {
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm<RelatorioData>({
    resolver: zodResolver(relatorioSchema),
    defaultValues: {
      data: new Date().toISOString().split("T")[0],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "visitantes",
  });

  const celulaSelecionada = watch("celula");

  useEffect(() => {
    const selecionada = celulas.find((c) => c.title === celulaSelecionada);
    if (selecionada) {
      setValue("lider", selecionada.lider);
      setValue("endereco", selecionada.local);
    }
  }, [celulaSelecionada, setValue]);

  const onSubmit = (data: RelatorioData) => {
    setEnviando(true);

    const visitantesText =
      data.visitantes
        ?.filter((v) => v.nome || v.fone)
        .map((v, i) => `\n• ${v.nome || ""} - ${v.fone || ""}`)
        .join("") || "Nenhum";

    const texto = `
📋 *Relatório de Reunião*

📌 *Célula:* ${data.celula}
👤 *Líder:* ${data.lider}
📅 *Data:* ${data.data}
📍 *Endereço:* ${data.endereco}

👥 *Quantidade de Pessoas:* ${data.quantidade}
🚪 *Visitantes:* ${data.visitantesQtd}

🎯 *Metas:* ${data.metas || "-"}

🧾 *Visitantes:* ${visitantesText}

📝 *Observações:* _${data.observacoes || "-"}_
`.trim();

    const numeroDestino = "5516996630727"; // << Substitua pelo número do WhatsApp (com DDI + DDD)
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
    toast.success("Relatório enviado com sucesso!");

    setTimeout(() => setEnviando(false), 3000); // volta ao normal após 3s
  };

  return (
    <section className="px-4 max-w-4xl mx-auto p-6 bg-zinc-500/20 backdrop-blur-sm rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 max-w-3xl mx-auto p-6"
      >
        <h1 className="text-2xl  text-center">Relatório de Célula</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="">Célula</label>
            <select
              {...register("celula")}
              className="w-full border p-2 rounded"
            >
              <option value="" className="bg-zinc-800">
                Selecione uma célula
              </option>
              {celulas.map((c) => (
                <option key={c.title} value={c.title} className="bg-black">
                  {c.title}
                </option>
              ))}
            </select>
            {errors.celula && (
              <p className="text-red-500 text-sm mt-1">
                {errors.celula.message}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="">N° Pessoas</label>
              <input
                type="number"
                {...register("quantidade")}
                className="w-full border p-2 rounded"
              />
              {errors.quantidade && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.quantidade.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="">Nº Visitantes</label>
              <input
                type="number"
                {...register("visitantesQtd")}
                className="w-full border p-2 rounded"
              />
              {errors.visitantesQtd && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.visitantesQtd.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className=" italic">Líder</label>
            <input
              {...register("lider")}
              className="w-full border p-2 rounded bg-zinc-600"
              readOnly
            />
            {errors.lider && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lider.message}
              </p>
            )}
          </div>
          <div>
            <label className="">Data</label>
            <input
              type="date"
              {...register("data")}
              className="w-full border p-2 rounded"
            />
            {errors.data && (
              <p className="text-red-500 text-sm mt-1">{errors.data.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className=" italic">Endereço</label>
          <input
            {...register("endereco")}
            className="w-full border p-2 rounded"
            readOnly
          />
          {errors.endereco && (
            <p className="text-red-500 text-sm mt-1">
              {errors.endereco.message}
            </p>
          )}
        </div>

        <div>
          <label className="">Metas</label>
          <textarea
            {...register("metas")}
            rows={3}
            className="w-full border p-2 rounded"
          />
          {errors.metas && (
            <p className="text-red-500 text-sm mt-1">{errors.metas.message}</p>
          )}
        </div>

        <h2 className="text-lg font-semibold mt-6">Visitantes</h2>

        {fields.map((field, index) => (
          <CampoVisitante key={field.id} index={index} register={register} />
        ))}

        <div className="flex justify-between">
          {fields.length < 10 && (
            <button
              type="button"
              onClick={() => append({ nome: "", fone: "" })}
              className="mt-2 text-primary underline cursor-pointer hover:text-blue-600"
            >
              + Adicionar visitante
            </button>
          )}
          {fields.length > 1 && (
            <button
              type="button"
              onClick={() => remove(fields.length - 1)}
              className="text-red-500 text-sm mt-1 cursor-pointer hover:text-red-600"
            >
              Remover último
            </button>
          )}
        </div>

        <div>
          <label className="italic font-medium">Observações</label>
          <textarea
            {...register("observacoes")}
            rows={4}
            className="w-full border p-2 rounded italic"
          />
          {errors.observacoes && (
            <p className="text-red-500 text-sm mt-1">
              {errors.observacoes.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={enviando}
          className={`px-4 py-2 rounded w-full font-semibold transition duration-300
            ${
              enviando
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-primary text-black hover:bg-green-500 hover:text-white"
            }`}
        >
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
