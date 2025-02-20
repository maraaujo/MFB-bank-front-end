

export const notificacao = (title, body, type) => {
    const toast = useToast();
    toast({
        type,
        title,
        body
    });
};

export const KeyCripto = () => '4wWq&sXd/c(3|v=AOkrdFGSr1=|f,+icWKY';

export const formatDate = (date) => {
    if (!date) return null;
    const [year, month, day] = date.split("-");
    const dayWithoutTime = day.split("T")[0];
    return `${dayWithoutTime}/${month}/${year}`;
};

export const FormataData = (data, tipo) => {
    if (!data || data === '0001-01-01T00:00:00') return "";
    let newData = new Date(data).toLocaleDateString(tipo);
    return newData === "Invalid Date" ? "" : newData;
};

export const ValorMonetario = (value, tipo = 'pt-BR', currency = 'BRL') => {
    return value !== undefined ? value.toLocaleString(tipo, { style: 'currency', currency }) : "";
};

export const FormatoMilhar = (value) => {
    return value !== undefined ? value.toLocaleString('pt-BR') : "";
};

export const FormatoMilharDuasCasasDecimais = (value) => {
    if (isNaN(value) || value === undefined) value = 0;
    const valores = value.toLocaleString("pt-BR").split(',');
    const valorInteiro = valores[0];
    const valorDecimal = valores.length > 1 ? valores[1].substring(0, 2) : "00";
    return `${valorInteiro},${padR(valorDecimal, 2)}`;
};

export const FormatoMilharValorInteiro = (value) => {
    if (isNaN(value)) value = 0;
    return value.toLocaleString("pt-BR").split(',')[0];
};

export const FormatoMilharValorDecimal = (value) => {
    if (isNaN(value)) value = 0;
    const valores = value.toLocaleString("pt-BR").split(',');
    return valores.length > 1 ? valores[1].substring(0, 2) : "00";
};

export const FormatoDecimal = (value) => {
    if (isNaN(value)) value = 0;
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value);
};

export const FormataTelefone = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "$1 $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value.substr(0, 15);
};

export const ConvertMoneyToFloat = (value) => {
    if (!value) return 0;
    return parseFloat(value.replace('R$', '').replace('.', '').replace(',', '.'));
};

export const FormatMoneyBR = (value) => {
    value = +value;
    if (!Number(value) && value !== 0) return "";
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
};

const padR = (str, length) => {
    return str.padEnd(length, '0');
};

export const downloadFile = (data, tipo, nomeArquivo) => {
    const url = window.URL.createObjectURL(new Blob([data], { type: tipo }));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", nomeArquivo);
    document.body.appendChild(link);
    link.click();
};
