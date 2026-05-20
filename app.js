const STORAGE_KEY = "fernanda-moura-avaliacao-inicial-v1";

const sections = [
  {
    id: "informacoes-pessoais",
    title: "Informações pessoais",
    eyebrow: "Avaliação inicial",
    fields: [
      { id: "nome", label: "Nome", type: "text", autocomplete: "name", width: "compact" },
      { id: "dataNascimento", label: "Data de nascimento", type: "date", width: "small" },
      { id: "telefone", label: "Telefone", type: "tel", autocomplete: "tel", width: "small" },
      { id: "cpf", label: "CPF", type: "text", inputmode: "numeric", width: "small" },
      { id: "endereco", label: "Endereço", type: "text", autocomplete: "street-address", width: "compact" },
      { id: "localNascimento", label: "Local de Nascimento", type: "text", width: "compact" },
      {
        id: "nivelInstrucao",
        label: "Nível de instrução",
        type: "select",
        width: "compact",
        options: ["", "Ensino fundamental", "Ensino médio", "Ensino superior", "Pós-graduação", "Outro"]
      },
      { id: "ocupacao", label: "Ocupação/Profissão", type: "text", width: "compact" },
      {
        id: "estadoCivil",
        label: "Estado civil",
        type: "select",
        width: "small",
        options: ["", "Solteiro(a)", "Casado(a)", "União estável", "Divorciado(a)", "Viúvo(a)", "Outro"]
      },
      { id: "genero", label: "Gênero", type: "text", width: "small" },
      { id: "numeroFilhos", label: "Nº de Filhos", type: "number", min: "0", width: "small" },
      {
        id: "terapiaAnterior",
        label: "Já fez terapia anteriormente?",
        type: "select",
        width: "compact",
        options: ["", "Sim", "Não"]
      },
      { id: "pessoaProxima", label: "Nome e Contato de Pessoa Próxima", type: "text", width: "compact" }
    ]
  },
  {
    id: "objetivos-terapeuticos",
    title: "Objetivos terapêuticos",
    eyebrow: "Motivos da busca",
    fields: [
      {
        id: "objetivosExpectativas",
        label: "Por favor, compartilhe quais são seus objetivos e expectativas para a terapia.",
        type: "textarea"
      },
      {
        id: "principaisDificuldades",
        label: "Quais são suas três principais dificuldades que motivaram você a procurar ajuda?",
        type: "textarea"
      }
    ]
  },
  {
    id: "estilo-de-vida",
    title: "Estilo de vida",
    eyebrow: "Rotina e hábitos",
    fields: [
      { id: "alimentacao", label: "Como é sua alimentação e seus hábitos alimentares?", type: "textarea" },
      {
        id: "atividadeFisica",
        label: "Pratica atividade física regularmente? Qual é o nível de atividade?",
        type: "textarea"
      },
      {
        id: "substancias",
        label: "Você usa substâncias como álcool, drogas ou tabaco? Se sim, com que frequência?",
        type: "textarea"
      },
      { id: "sono", label: "Como são seus hábitos de sono? Dorme o suficiente?", type: "textarea" },
      {
        id: "rotinaDiaria",
        label: "Por favor, descreva sua rotina diária típica e atividades que você realiza ao longo de um dia comum.",
        type: "textarea"
      },
      {
        id: "finsDeSemana",
        label: "E em relação aos fins de semana, eles costumam ser diferentes dos seus dias típicos?",
        type: "textarea"
      },
      {
        id: "pesoAtual",
        label: "Você sente que seu peso atual está adequado? Se não, poderia compartilhar suas razões ou preocupações relacionadas a isso?",
        type: "textarea"
      }
    ]
  },
  {
    id: "historico-medico",
    title: "Histórico médico",
    eyebrow: "Saúde geral",
    fields: [
      { id: "checkup", label: "Quando foi sua última consulta para um check-up médico?", type: "textarea" },
      {
        id: "alteracaoSaude",
        label: "Você experimentou alguma alteração em sua saúde geral ao longo do último ano? Em caso afirmativo, por favor, compartilhe mais detalhes.",
        type: "textarea"
      },
      { id: "problemasSaudeAtuais", label: "Quais são seus problemas de saúde atuais?", type: "textarea" },
      { id: "saudeCronica", label: "Você tem algum problema de saúde crônico?", type: "textarea" },
      { id: "alergias", label: "Possui alguma alergia conhecida?", type: "textarea" },
      {
        id: "medicamentos",
        label: "Você está tomando algum medicamento regularmente? Se sim, o que?",
        type: "textarea"
      },
      { id: "hospitalizacao", label: "Já foi hospitalizado anteriormente? Por que?", type: "textarea" },
      { id: "cirurgia", label: "Passou por alguma cirurgia? Qual foi o motivo?", type: "textarea" }
    ]
  },
  {
    id: "historico-psiquiatrico",
    title: "Histórico psiquiátrico",
    eyebrow: "Saúde emocional",
    fields: [
      {
        id: "tratamentoAnterior",
        label: "Já recebeu tratamento psicológico ou psiquiátrico anteriormente? Se sim, quais foram os resultados?",
        type: "textarea"
      },
      { id: "traumaSignificativo", label: "Você já passou por algum trauma significativo no passado?", type: "textarea" },
      {
        id: "internacaoPsiquiatrica",
        label: "Você já esteve internado em um hospital devido a questões emocionais ou psiquiátricas? Se sim, por favor, informe quantas vezes e por quais motivos você precisou ser hospitalizado.",
        type: "textarea"
      },
      {
        id: "eventosEstressantes",
        label: "Você passou por eventos estressantes recentemente que te afetaram?",
        type: "textarea"
      },
      {
        id: "historicoFamiliarMental",
        label: "Existe histórico de transtornos mentais ou abuso de álcool e drogas em sua família? Caso afirmativo, por favor, forneça mais detalhes.",
        type: "textarea"
      },
      {
        id: "medicacaoPsiquiatrica",
        label: "Você está fazendo uso de algum medicamento para questões psiquiátricas? Em caso positivo, por favor, forneça informações sobre o nome da medicação, dosagem e frequência.",
        type: "textarea"
      },
      {
        id: "suicidioAutomachucado",
        label: "Você já pensou em suicídio ou tentou? Se sim, quantas vezes? Já teve pensamentos de se machucar ou se machucou antes?",
        type: "textarea"
      }
    ]
  },
  {
    id: "infancia-adolescencia",
    title: "Histórico da infância e adolescência",
    eyebrow: "Família e escola",
    fields: [
      {
        id: "relacaoPaisIrmaos",
        label: "Como eram seus relacionamentos com seus pais e irmãos/suas irmãs?",
        type: "textarea"
      },
      {
        id: "eventoConflitoFamiliar",
        label: "Houve algum evento importante ou conflito familiar que te afetou?",
        type: "textarea"
      },
      {
        id: "dinamicaFamiliarJovem",
        label: "Como era a dinâmica familiar em sua casa quando você era mais jovem?",
        type: "textarea"
      },
      {
        id: "experienciaEscola",
        label: "Como foi sua experiência na escola? Houve alguma situação difícil na escola que o tenha marcado?",
        type: "textarea"
      },
      {
        id: "interessesInfancia",
        label: "Quais eram seus interesses e atividades favoritas na infância e adolescência?",
        type: "textarea"
      },
      {
        id: "eventoMarcanteInfancia",
        label: "Houve algum evento marcante ou traumático em sua infância/adolescência?",
        type: "textarea"
      }
    ]
  },
  {
    id: "historico-profissional",
    title: "Histórico profissional e laboral",
    eyebrow: "Trabalho",
    fields: [
      {
        id: "trajetoriaProfissional",
        label: "Gostaríamos de conhecer um pouco sobre sua trajetória profissional anterior, incluindo suas experiências de trabalho, cursos e formações realizadas.",
        type: "textarea"
      },
      {
        id: "atividadeAtual",
        label: "Qual atividade ou papel principal você desempenha atualmente?",
        type: "textarea"
      },
      { id: "satisfacaoTrabalho", label: "Você está satisfeito com o trabalho atual?", type: "textarea" },
      {
        id: "estresseOcupacional",
        label: "Sofre muito estresse ocupacional? Quais são as principais fontes de estresse?",
        type: "textarea"
      },
      {
        id: "relacoesTrabalho",
        label: "Como são suas relações com colegas e superiores no trabalho?",
        type: "textarea"
      },
      {
        id: "desafiosProfissionais",
        label: "Você enfrenta desafios específicos? Quais deles foram os mais significativos?",
        type: "textarea"
      }
    ]
  },
  {
    id: "relacionamentos",
    title: "Relacionamentos",
    eyebrow: "Vínculos importantes",
    fields: [
      { id: "relacaoFamiliaAmigos", label: "Como é sua relação com familiares e amigos?", type: "textarea" },
      {
        id: "relacionamentosImportantes",
        label: "Você teve relacionamentos interpessoais importantes que podem estar afetando sua vida atualmente?",
        type: "textarea"
      },
      {
        id: "relacaoParceiro",
        label: "Como está o relacionamento com seu/sua parceiro(a) atual (se aplicável)?",
        type: "textarea"
      },
      {
        id: "relacaoFilhos",
        label: "Caso tenha filhos, poderia descrever seu relacionamento com eles? Se você enfrentar algum desafio específico em relação aos seus filhos, por favor, compartilhe aqueles que considera mais relevantes.",
        type: "textarea"
      },
      {
        id: "informacoesPai",
        label: "Compartilhe algumas informações sobre seu pai, como sua personalidade, caráter e o tipo de relacionamento que você mantém ou manteve com ele.",
        type: "textarea"
      },
      {
        id: "informacoesMae",
        label: "Compartilhe algumas informações sobre sua mãe, como sua personalidade, caráter e o tipo de relacionamento que você mantém ou manteve com ela.",
        type: "textarea"
      },
      {
        id: "relacaoIrmaos",
        label: "Caso tenha irmãos, por favor, descreva as relações significativas que você mantém com eles. Essas relações têm sido benéficas ou apresentam desafios para você?",
        type: "textarea"
      },
      {
        id: "dificuldadesPais",
        label: "Caso tenha enfrentado ou enfrente dificuldades em seu relacionamento com seus pais, por favor, descreva a situação mais relevante.",
        type: "textarea"
      },
      {
        id: "tentativaSuicidioFamilia",
        label: "Você tem conhecimento de algum membro de sua família que já passou por uma situação de tentativa de suicídio? Em caso positivo, você poderia compartilhar o grau de parentesco que tem com essa pessoa?",
        type: "textarea"
      },
      {
        id: "suicidioFamilia",
        label: "Além disso, você tem conhecimento de algum membro de sua família que faleceu em decorrência de suicídio?",
        type: "textarea"
      },
      {
        id: "insercaoSocial",
        label: "Como é sua inserção social? Participa ativamente de grupos sociais?",
        type: "textarea"
      },
      {
        id: "relacionamentosAmorosos",
        label: "Como foram seus relacionamentos amorosos anteriores e quais foram as principais lições que você aprendeu com eles?",
        type: "textarea"
      }
    ]
  },
  {
    id: "emocoes-comportamento",
    title: "Emoções e comportamento",
    eyebrow: "Padrões pessoais",
    fields: [
      {
        id: "comportamentosProblematicos",
        label: "Quais comportamentos problemáticos você identifica em sua vida?",
        type: "textarea"
      },
      {
        id: "emocoesPredominantes",
        label: "Quais emoções são mais predominantes em sua vida?",
        type: "textarea"
      },
      {
        id: "estrategiasEnfrentamento",
        label: "Quais estratégias de enfrentamento você utiliza diante de situações difíceis?",
        type: "textarea"
      },
      { id: "lidaEmocoes", label: "Como você lida com as emoções em geral?", type: "textarea" }
    ]
  },
  {
    id: "futuro-adicionais",
    title: "Visões para o futuro e informações adicionais",
    eyebrow: "Próximos passos",
    fields: [
      {
        id: "planosFuturo",
        label: "Você estaria disposto(a) a compartilhar um pouco sobre seus planos, aspirações e expectativas para o futuro?",
        type: "textarea"
      },
      {
        id: "dificilCompartilhar",
        label: "Existe algo que você acha difícil compartilhar neste momento? Não é necessário entrar em detalhes agora, apenas quero saber se há aspectos que poderão surgir mais adiante, talvez no futuro.",
        type: "textarea"
      }
    ]
  }
];

const allFields = sections.flatMap((section) =>
  section.fields.map((field) => ({ ...field, sectionId: section.id, sectionTitle: section.title }))
);

const form = document.getElementById("evaluationForm");
const formSections = document.getElementById("formSections");
const sectionNav = document.getElementById("sectionNav");
const progressLabel = document.getElementById("progressLabel");
const progressFill = document.getElementById("progressFill");
const downloadButton = document.getElementById("downloadButton");
const shareButton = document.getElementById("shareButton");
const clearButton = document.getElementById("clearButton");
const toast = document.getElementById("toast");
const shareDialog = document.getElementById("shareDialog");
const dialogMessage = document.getElementById("dialogMessage");
const closeDialogButton = document.getElementById("closeDialogButton");
const openWhatsAppButton = document.getElementById("openWhatsAppButton");

let toastTimer;

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function renderForm() {
  const savedValues = loadSavedValues();
  const fragment = document.createDocumentFragment();
  const navFragment = document.createDocumentFragment();

  sections.forEach((section, sectionIndex) => {
    const navButton = document.createElement("button");
    navButton.type = "button";
    navButton.className = "nav-item";
    navButton.dataset.target = section.id;
    navButton.setAttribute("aria-controls", section.id);

    navButton.append(createElement("span", "nav-number", String(sectionIndex + 1).padStart(2, "0")));
    const navText = createElement("span", "nav-text");
    navText.append(createElement("span", "nav-title", section.title));
    navText.append(createElement("span", "nav-count", `0/${section.fields.length}`));
    navButton.append(navText);
    navButton.addEventListener("click", () => {
      document.getElementById(section.id).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    navFragment.append(navButton);

    const sectionElement = createElement("section", "form-section");
    sectionElement.id = section.id;
    sectionElement.dataset.sectionId = section.id;

    const heading = createElement("div", "section-heading");
    const headingText = createElement("div");
    headingText.append(createElement("p", "section-eyebrow", section.eyebrow));
    headingText.append(createElement("h3", "", section.title));
    heading.append(headingText);
    heading.append(createElement("span", "section-badge", `${sectionIndex + 1}/${sections.length}`));
    sectionElement.append(heading);

    const grid = createElement("div", "field-grid");
    section.fields.forEach((field) => {
      const wrapper = createElement("div", `field ${field.width || ""}`.trim());
      const label = createElement("label", "", field.label);
      label.setAttribute("for", field.id);
      wrapper.append(label);

      const control = createFieldControl(field);
      control.value = savedValues[field.id] || "";
      control.addEventListener("input", handleInput);
      control.addEventListener("change", handleInput);
      wrapper.append(control);
      grid.append(wrapper);
    });

    sectionElement.append(grid);
    fragment.append(sectionElement);
  });

  formSections.append(fragment);
  sectionNav.append(navFragment);
  updateProgress();
  observeSections();
  refreshIcons();
}

function createFieldControl(field) {
  if (field.type === "textarea") {
    const textarea = document.createElement("textarea");
    textarea.id = field.id;
    textarea.name = field.id;
    textarea.rows = field.rows || 5;
    return textarea;
  }

  if (field.type === "select") {
    const select = document.createElement("select");
    select.id = field.id;
    select.name = field.id;
    field.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option || "Selecione";
      select.append(optionElement);
    });
    return select;
  }

  const input = document.createElement("input");
  input.id = field.id;
  input.name = field.id;
  input.type = field.type || "text";
  if (field.autocomplete) input.autocomplete = field.autocomplete;
  if (field.inputmode) input.inputMode = field.inputmode;
  if (field.min) input.min = field.min;
  return input;
}

function handleInput(event) {
  if (event.target.id === "cpf") {
    event.target.value = formatCpf(event.target.value);
  }

  if (event.target.id === "telefone") {
    event.target.value = formatPhone(event.target.value);
  }

  saveValues();
  updateProgress();
}

function collectValues() {
  return allFields.reduce((values, field) => {
    const control = document.getElementById(field.id);
    values[field.id] = control ? control.value.trim() : "";
    return values;
  }, {});
}

function loadSavedValues() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveValues() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collectValues()));
  } catch {
    showToast("Não foi possível salvar o rascunho neste navegador.");
  }
}

function updateProgress() {
  const values = collectValues();
  const answered = allFields.filter((field) => values[field.id]).length;
  const percentage = Math.round((answered / allFields.length) * 100);
  progressLabel.textContent = `${percentage}% preenchido`;
  progressFill.style.width = `${percentage}%`;

  sections.forEach((section) => {
    const count = section.fields.filter((field) => values[field.id]).length;
    const navButton = sectionNav.querySelector(`[data-target="${section.id}"]`);
    if (navButton) navButton.querySelector(".nav-count").textContent = `${count}/${section.fields.length}`;
  });
}

function observeSections() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navButton = sectionNav.querySelector(`[data-target="${entry.target.id}"]`);
        if (entry.isIntersecting) {
          sectionNav.querySelectorAll(".nav-item").forEach((button) => button.classList.remove("active"));
          navButton?.classList.add("active");
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  document.querySelectorAll(".form-section").forEach((section) => observer.observe(section));
}

function formatCpf(value) {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 10) {
    return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digits.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 3600);
}

function setBusy(isBusy) {
  [downloadButton, shareButton, clearButton].forEach((button) => {
    button.disabled = isBusy;
  });
}

function getFileName(values) {
  const patientName = values.nome ? slugify(values.nome) : "paciente";
  return `avaliacao-inicial-${patientName}-fernanda-moura.pdf`;
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

async function createPdfBlob() {
  if (!window.jspdf?.jsPDF) {
    throw new Error("Biblioteca de PDF não carregada.");
  }
  const doc = buildPdfDocument();
  return doc.output("blob");
}

function buildPdfDocument() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const values = collectValues();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  const footerTop = pageHeight - 18;
  const lineHeight = 5.2;
  let y = 18;

  function addTopBand() {
    doc.setFillColor(238, 244, 238);
    doc.rect(0, 0, pageWidth, 36, "F");
    doc.setFillColor(111, 143, 134);
    doc.rect(0, 0, 5, 36, "F");
    doc.setTextColor(38, 60, 54);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Psicóloga Fernanda Moura", margin, 15);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(92, 105, 99);
    doc.text("Questionário de Avaliação Inicial", margin, 22);
  }

  function addNewPage() {
    doc.addPage();
    addTopBand();
    y = 46;
  }

  function ensureSpace(height) {
    if (y + height > footerTop) {
      addNewPage();
    }
  }

  function writeLines(lines, x, startY, style) {
    doc.setFont("helvetica", style.font || "normal");
    doc.setFontSize(style.size || 10);
    doc.setTextColor(...style.color);
    lines.forEach((line, index) => {
      doc.text(line, x, startY + index * lineHeight);
    });
  }

  function addSectionTitle(section) {
    ensureSpace(22);
    doc.setFillColor(255, 244, 215);
    doc.roundedRect(margin, y, contentWidth, 12, 2, 2, "F");
    doc.setTextColor(64, 73, 68);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.text(section.title.toUpperCase(), margin + 4, y + 8);
    y += 19;
  }

  function addField(label, value) {
    const questionLines = doc.splitTextToSize(label, contentWidth);
    ensureSpace(questionLines.length * lineHeight + 14);

    writeLines(questionLines, margin, y, { font: "bold", size: 9.7, color: [42, 58, 53] });
    y += questionLines.length * lineHeight + 2;

    const answer = value || "Não informado";
    const answerLines = doc.splitTextToSize(answer, contentWidth);
    const answerColor = value ? [64, 72, 68] : [132, 128, 120];
    const answerFont = value ? "normal" : "italic";

    answerLines.forEach((line) => {
      ensureSpace(lineHeight + 8);
      doc.setFont("helvetica", answerFont);
      doc.setFontSize(9.5);
      doc.setTextColor(...answerColor);
      doc.text(line, margin, y);
      y += lineHeight;
    });

    y += 2;
    ensureSpace(7);
    doc.setDrawColor(222, 216, 207);
    doc.line(margin, y, margin + contentWidth, y);
    y += 7;
  }

  function addFooter() {
    const totalPages = doc.getNumberOfPages();
    for (let page = 1; page <= totalPages; page += 1) {
      doc.setPage(page);
      doc.setDrawColor(222, 216, 207);
      doc.line(margin, pageHeight - 14, pageWidth - margin, pageHeight - 14);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(112, 116, 111);
      doc.text("Psicóloga Fernanda Moura", margin, pageHeight - 9);
      doc.text(`Página ${page} de ${totalPages}`, pageWidth - margin, pageHeight - 9, { align: "right" });
    }
  }

  addTopBand();
  y = 48;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(38, 60, 54);
  doc.text("Avaliação inicial", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(92, 105, 99);
  const patient = values.nome || "Não informado";
  const generatedAt = new Date().toLocaleDateString("pt-BR");
  doc.text(`Paciente: ${patient}`, margin, y);
  y += 6;
  doc.text(`Data de geração: ${generatedAt}`, margin, y);
  y += 12;

  sections.forEach((section) => {
    addSectionTitle(section);
    section.fields.forEach((field) => addField(field.label, values[field.id]));
  });

  ensureSpace(22);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8.5);
  doc.setTextColor(112, 116, 111);
  const sourceNote = "Conteúdo baseado no questionário de avaliação inicial fornecido para personalização.";
  doc.text(doc.splitTextToSize(sourceNote, contentWidth), margin, y);

  addFooter();
  return doc;
}

function downloadBlob(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function downloadPdf() {
  setBusy(true);
  try {
    const values = collectValues();
    const blob = await createPdfBlob();
    downloadBlob(blob, getFileName(values));
    showToast("PDF gerado com sucesso.");
  } catch (error) {
    showToast(error.message || "Não foi possível gerar o PDF.");
  } finally {
    setBusy(false);
  }
}

async function sharePdf() {
  setBusy(true);
  try {
    const values = collectValues();
    const fileName = getFileName(values);
    const blob = await createPdfBlob();
    const file = new File([blob], fileName, { type: "application/pdf" });
    const shareText = "Questionário de Avaliação Inicial preenchido para Psicóloga Fernanda Moura.";

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "Questionário de Avaliação Inicial",
        text: shareText
      });
      showToast("Compartilhamento aberto.");
      return;
    }

    downloadBlob(blob, fileName);
    showShareFallback(fileName);
  } catch (error) {
    if (error.name === "AbortError") {
      showToast("Compartilhamento cancelado.");
    } else {
      showToast(error.message || "Não foi possível compartilhar o PDF.");
    }
  } finally {
    setBusy(false);
  }
}

function showShareFallback(fileName) {
  dialogMessage.textContent = `Este navegador não permite anexar o PDF automaticamente. O arquivo ${fileName} foi baixado; abra o WhatsApp e anexe esse PDF na conversa escolhida.`;

  if (typeof shareDialog.showModal === "function") {
    shareDialog.showModal();
    refreshIcons();
    return;
  }

  window.alert(dialogMessage.textContent);
}

function openWhatsAppFallback() {
  const message = encodeURIComponent(
    "Olá, segue meu Questionário de Avaliação Inicial preenchido para a Psicóloga Fernanda Moura."
  );
  window.open(`https://wa.me/?text=${message}`, "_blank", "noopener,noreferrer");
}

function clearForm() {
  const confirmed = window.confirm("Limpar todas as respostas salvas neste dispositivo?");
  if (!confirmed) return;

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  updateProgress();
  showToast("Respostas limpas.");
}

downloadButton.addEventListener("click", downloadPdf);
shareButton.addEventListener("click", sharePdf);
clearButton.addEventListener("click", clearForm);
closeDialogButton.addEventListener("click", () => shareDialog.close());
openWhatsAppButton.addEventListener("click", openWhatsAppFallback);

renderForm();
