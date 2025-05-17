import { z } from "zod";

export const relatorioSchema = z.object({
  celula: z.string().min(1, "Selecione uma célula"),
  lider: z.string().min(1, "Selecione uma célula"),
  data: z.string().min(1, "Data é obrigatória"),
  endereco: z.string().min(1, "Selecione uma célula"),
  quantidade: z.coerce.number().min(1, "Quantidade é obrigatória"),
  visitantesQtd: z.coerce.number().min(0).optional(),
  metas: z.string().min(10, "Metas são obrigatórias"),
  observacoes: z.string().min(10, "Cite algumas observações sobre a célula"),
  visitantes: z
    .array(
      z.object({
        nome: z.string().min(1, "Nome é obrigatorio"),
        fone: z.string().optional(),
      })
    )
    .max(6)
    .optional(),
});

export type RelatorioData = z.infer<typeof relatorioSchema>;
