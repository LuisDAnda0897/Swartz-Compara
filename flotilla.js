const fleetInsurers = [
    { name: "AXA", logo: "LOGO/AXA_Logo.svg.png" },
    { name: "GNP", logo: "LOGO/gnp-seguros.png" },
    { name: "Qualitas", logo: "LOGO/qualitas_logo.png" },
    { name: "Banorte", logo: "LOGO/banorte.png" },
    { name: "SPT", logo: "LOGO/images.png" },
    { name: "Latino", logo: "LOGO/latino seguros.png" }
];

const coverageRows = [
    "Daños Materiales",
    "Robo Total",
    "Responsabilidad Civil",
    "Responsabilidad Civil Ocupantes",
    "Gastos Médicos Ocupantes",
    "Asistencia Vial",
    "Asistencia Legal",
    "Accidentes al Conductor"
];

const fleetCoverageRows = Array.from(new Set([...coverageRows, "Gastos Médicos Ocupantes"]));

const fleetSumOptions = {
    AXA: ["Valor Factura", "Valor Convenido", "Valor Comercial", "Valor Comercial 110%"],
    GNP: ["Valor Factura", "Valor Convenido", "Valor Convenido +10%", "Valor Comercial"],
    Qualitas: ["Valor Factura", "Valor Convenido", "Valor Comercial"],
    Banorte: ["Valor Factura", "Valor Convenido", "Valor Comercial"],
    SPT: ["Valor Factura", "Valor Convenido", "Valor Comercial"],
    Latino: ["Valor Factura", "Valor Convenido", "Valor Comercial"]
};

const fleetDeductibleData = {
    Particular: {
        "Daños Materiales": ["5%", "5%", "5%", "5%", "5%", "5%"],
        "Robo Total": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Responsabilidad Civil": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Responsabilidad Civil Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Gastos Médicos Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Vial": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Legal": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Accidentes al Conductor": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"]
    },
    Uber: {
        "Daños Materiales": ["5%", "10%", "10%", "10%", "10%", "10%"],
        "Robo Total": ["10%", "20%", "20%", "20%", "20%", "20%"],
        "Responsabilidad Civil": ["N/A", "50 UMAs", "50 UMAs", "50 UMAs", "N/A", "20 UMAs"],
        "Responsabilidad Civil Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Gastos Médicos Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Vial": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Legal": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Accidentes al Conductor": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"]
    },
    Multiplataforma: {
        "Daños Materiales": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Robo Total": ["20%", "20%", "20%", "20%", "20%", "20%"],
        "Responsabilidad Civil": ["50 UMAs", "50 UMAs", "50 UMAs", "50 UMAs", "N/A", "20 UMAs"],
        "Responsabilidad Civil Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Gastos Médicos Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Vial": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Legal": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Accidentes al Conductor": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"]
    },
    "Moto App": {
        "Daños Materiales": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Robo Total": ["20%", "20%", "20%", "20%", "20%", "20%"],
        "Responsabilidad Civil": ["N/A", "Sin Deducible", "N/A", "25 UMAs", "Pendiente", "Pendiente"],
        "Responsabilidad Civil Ocupantes": ["", "", "", "", "", ""],
        "Gastos Médicos Ocupantes": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Vial": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Asistencia Legal": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"],
        "Accidentes al Conductor": ["Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible", "Sin deducible"]
    }
};

const fleetPlanData = {
    Particular: {
        "Daños Materiales": ["5%", "5%", "5%", "5%", "5%", "5%"],
        "Robo Total": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Responsabilidad Civil": ["$4,000,000", "$3,000,000", "$3,000,000", "$4,000,000", "$3,000,000", "$3,000,000"],
        "Responsabilidad Civil Ocupantes": ["Incluido", "Incluido", "Incluido", "Incluido", "Incluido", "Incluido"],
        "Gastos Médicos Ocupantes": ["$200,000", "$200,000", "$200,000", "$200,000", "$200,000", "$200,000"],
        "Asistencia Vial": ["5 Eventos", "5 Eventos", "5 Eventos", "5 Eventos", "1 Evento", "5 Eventos"],
        "Asistencia Legal": ["Incluida", "Incluida", "Incluida", "Incluida", "Incluida", "Incluida"],
        "Accidentes al Conductor": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"]
    },
    Uber: {
        "Daños Materiales": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Robo Total": ["20%", "20%", "20%", "20%", "20%", "20%"],
        "Responsabilidad Civil": ["$4,000,000", "$3,000,000", "$3,000,000", "$4,000,000", "$3,000,000", "$3,000,000"],
        "Responsabilidad Civil Ocupantes": ["$1,500,000", "$3,000,000", "5,000 UMAs", "5,000 UMAs", "5,000 UMAs", "5,000 UMAs"],
        "Gastos Médicos Ocupantes": ["$200,000", "$200,000", "$200,000", "$200,000", "$200,000", "$200,000"],
        "Asistencia Vial": ["5 Eventos", "5 Eventos", "2 Eventos", "2 Eventos", "1 Evento", "2 Eventos"],
        "Asistencia Legal": ["Incluida", "Incluida", "Incluida", "Incluida", "Incluida", "Incluida"],
        "Accidentes al Conductor": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"]
    },
    Multiplataforma: {
        "Daños Materiales": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Robo Total": ["20%", "20%", "20%", "20%", "20%", "20%"],
        "Responsabilidad Civil": ["$4,000,000", "$3,000,000", "$3,000,000", "$4,000,000", "$3,000,000", "$3,000,000"],
        "Responsabilidad Civil Ocupantes": ["5,000 UMAs", "$3,000,000", "5,000 UMAs", "5,000 UMAs", "5,000 UMAs", "5,000 UMAs"],
        "Gastos Médicos Ocupantes": ["$200,000", "$200,000", "$200,000", "$200,000", "$200,000", "$200,000"],
        "Asistencia Vial": ["2 Eventos", "5 Eventos", "2 Eventos", "2 Eventos", "1 Evento", "2 Eventos"],
        "Asistencia Legal": ["Incluida", "Incluida", "Incluida", "Incluida", "Incluida", "Incluida"]
    },
    "Moto App": {
        "Daños Materiales": ["10%", "10%", "10%", "10%", "10%", "10%"],
        "Robo Total": ["20%", "20%", "20%", "20%", "20%", "20%"],
        "Responsabilidad Civil": ["$3,000,000", "$3,000,000", "$3,000,000", "$4,000,000", "Pendiente", "Pendiente"],
        "Responsabilidad Civil Ocupantes": ["", "", "", "", "", ""],
        "Gastos Médicos Ocupantes": ["$50,000", "$50,000", "$50,000", "$25,000", "Pendiente", "Pendiente"],
        "Asistencia Vial": ["2 Eventos", "5 Eventos", "2 Eventos", "2 Eventos", "Pendiente", "Pendiente"],
        "Asistencia Legal": ["Incluida", "Incluida", "Incluida", "Incluida", "Pendiente", "Pendiente"],
        "Accidentes al Conductor": ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"]
    }
};

let fleetVehicles = [];
let fleetCoverage = {};
let fleetAdditionalCoverages = [];
let fleetSumTypes = {};
let fleetSumAmounts = {};

const money = (value) => {
    const number = Number(String(value || "").replace(/[^0-9.]/g, ""));
    return number ? number.toLocaleString("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 2 }) : (value || "-");
};

const escapeHtml = (value) => String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const selectedFleetInsurers = () => fleetInsurers.filter((_, index) => document.querySelector(`.fleetInsurer__Check[data-index="${index}"]`)?.checked);

function getFleetCoverageValue(coverage, insurerName) {
    const key = `${coverage}|${insurerName}|suma`;
    if (Object.prototype.hasOwnProperty.call(fleetCoverage, key)) return fleetCoverage[key];

    const plan = document.getElementById("fleetPlan").value;
    const planData = fleetPlanData[plan] || {};
    const insurerIndex = fleetInsurers.findIndex((insurer) => insurer.name === insurerName);
    return planData[coverage]?.[insurerIndex] || "";
}

function getFleetDeductibleValue(coverage, insurerName) {
    const key = `${coverage}|${insurerName}|deducible`;
    if (Object.prototype.hasOwnProperty.call(fleetCoverage, key)) return fleetCoverage[key];

    const plan = document.getElementById("fleetPlan").value;
    const planData = fleetDeductibleData[plan] || {};
    const insurerIndex = fleetInsurers.findIndex((insurer) => insurer.name === insurerName);
    return planData[coverage]?.[insurerIndex] || "Sin deducible";
}

function getFleetVisibleCoverageRows() {
    const plan = document.getElementById("fleetPlan").value;
    return fleetCoverageRows.filter((coverage) => coverage !== "Responsabilidad Civil Ocupantes" || !["Particular", "Moto App"].includes(plan));
}

function getFleetSumDisplay(coverage, insurerName) {
    if (!["Daños Materiales", "Robo Total"].includes(coverage)) return getFleetCoverageValue(coverage, insurerName);

    const type = fleetSumTypes[insurerName] || "";
    if (!type) return "";
    return isCustomFleetSum(type) ? `${type}*` : type;
}

function getFleetSumTypeDisplay(insurerName) {
    const type = fleetSumTypes[insurerName] || "";
    if (!type) return "-";
    return isCustomFleetSum(type) ? `${type}*` : type;
}

function getFleetVehicleSumAmount(vehicleId, insurerName) {
    return fleetSumAmounts[`${vehicleId}|${insurerName}`] || "";
}

function isCustomFleetSum(type) {
    return ["Valor Factura", "Valor Convenido", "Valor Convenido +10%"].includes(type);
}

function renderInsurers() {
    const container = document.getElementById("fleetInsurers");
    container.innerHTML = fleetInsurers.map((insurer, index) => `
        <label class="fleetInsurer">
            <input type="checkbox" class="fleetInsurer__Check" data-index="${index}">
            <img src="${insurer.logo}" alt="${insurer.name}">
            <span>${insurer.name}</span>
        </label>
    `).join("");
    container.querySelectorAll("input").forEach((input) => input.addEventListener("change", renderAllTables));
}

function renderVehicleTable() {
    const selected = selectedFleetInsurers();
    const table = document.getElementById("fleetVehiclesTable");
    const empty = document.getElementById("fleetVehiclesEmpty");
    const count = fleetVehicles.length;
    document.getElementById("fleetVehicleCount").textContent = `${count} ${count === 1 ? "auto" : "autos"}`;

    table.querySelector("thead").innerHTML = `<tr><th>Vehículo</th>${selected.map((insurer) => `<th>${insurer.name}<br><small>Costo anual</small></th>`).join("")}</tr>`;
    table.querySelector("tbody").innerHTML = fleetVehicles.map((vehicle, rowIndex) => `
        <tr>
            <td>
                <div class="fleetVehicleFields">
                    <input data-field="year" data-numeric="integer" data-row="${rowIndex}" inputmode="numeric" maxlength="4" placeholder="Modelo" value="${escapeHtml(vehicle.year)}">
                    <input data-field="description" data-uppercase="true" data-row="${rowIndex}" placeholder="Descripción del vehículo" value="${escapeHtml(vehicle.description.toUpperCase())}">
                    <button class="fleetRemove" data-remove="${rowIndex}" type="button" title="Eliminar auto">×</button>
                </div>
            </td>
            ${selected.map((insurer) => `<td><input data-cost="${insurer.name}" data-numeric="decimal" data-row="${rowIndex}" inputmode="decimal" placeholder="$0.00" value="${escapeHtml(vehicle.costs[insurer.name])}"></td>`).join("")}
        </tr>
    `).join("");

    empty.hidden = fleetVehicles.length > 0;
    table.hidden = fleetVehicles.length === 0 || selected.length === 0;
    if (selected.length === 0) empty.textContent = "Selecciona al menos una aseguradora para comenzar.";
    else empty.textContent = fleetVehicles.length ? "" : "Agrega el primer auto para comenzar la cotización.";

    table.querySelectorAll("[data-field]").forEach((input) => input.addEventListener("input", () => {
        fleetVehicles[Number(input.dataset.row)][input.dataset.field] = input.value;
    }));
    table.querySelectorAll("[data-cost]").forEach((input) => input.addEventListener("input", () => {
        fleetVehicles[Number(input.dataset.row)].costs[input.dataset.cost] = input.value;
    }));
    table.querySelectorAll("[data-numeric]").forEach((input) => input.addEventListener("input", () => {
        restrictNumericInput(input);
        if (input.dataset.field) fleetVehicles[Number(input.dataset.row)][input.dataset.field] = input.value;
        if (input.dataset.cost) fleetVehicles[Number(input.dataset.row)].costs[input.dataset.cost] = input.value;
    }));
    table.querySelectorAll("[data-uppercase]").forEach((input) => input.addEventListener("input", () => {
        input.value = input.value.toUpperCase();
        fleetVehicles[Number(input.dataset.row)][input.dataset.field] = input.value;
    }));
    table.querySelectorAll("[data-remove]").forEach((button) => button.addEventListener("click", () => {
        fleetVehicles.splice(Number(button.dataset.remove), 1);
        renderAllTables();
    }));
}

function renderCoverageTable() {
    const selected = selectedFleetInsurers();
    const table = document.getElementById("fleetCoverageTable");
    table.classList.toggle("fleetCoverageTable--wide", selected.length > 3);
    table.querySelector("thead").innerHTML = `
        <tr><th>Cobertura</th>${selected.map((insurer) => `<th colspan="2">${insurer.name}</th>`).join("")}</tr>
        <tr><th></th>${selected.map(() => "<th>Suma asegurada</th><th>Deducible</th>").join("")}</tr>
    `;
    const sumRow = `<tr>
        <td>Tipo de suma asegurada</td>
        ${selected.map((insurer) => {
            const type = fleetSumTypes[insurer.name] || "";
            const options = (fleetSumOptions[insurer.name] || []).map((option) => `<option value="${option}" ${option === type ? "selected" : ""}>${option}</option>`).join("");
            return `<td><div class="fleetSumControl"><select data-sum-type="${insurer.name}"><option value="">Seleccione</option>${options}</select><small>${isCustomFleetSum(type) ? "Captura el valor por auto abajo" : ""}</small></div></td><td class="fleetCoverage__Spacer">-</td>`;
        }).join("")}
    </tr>`;
    const standardRows = getFleetVisibleCoverageRows().map((coverage) => `
        <tr>
            <td>${coverage}</td>
            ${selected.map((insurer) => {
                const suma = getFleetSumDisplay(coverage, insurer.name);
                const deducible = getFleetDeductibleValue(coverage, insurer.name);
                const sumaBloqueada = ["Daños Materiales", "Robo Total"].includes(coverage) ? "readonly" : "";
                return `<td><input data-coverage-suma="${coverage}" data-insurer="${insurer.name}" placeholder="Suma asegurada" value="${escapeHtml(suma)}" ${sumaBloqueada}></td><td><input data-coverage-deducible="${coverage}" data-insurer="${insurer.name}" placeholder="Deducible" value="${escapeHtml(deducible)}"></td>`;
            }).join("")}
        </tr>
    `).join("");
    const additionalRows = fleetAdditionalCoverages.map((coverage) => `
        <tr>
            <td><div class="fleetAdditional__Name"><input data-additional-name="${coverage.id}" placeholder="Nombre de cobertura" value="${escapeHtml(coverage.name)}"><button type="button" class="fleetAdditional__Delete" data-delete-additional="${coverage.id}" title="Eliminar cobertura">×</button></div></td>
            ${selected.map((insurer) => `<td><input data-additional-value="${coverage.id}" data-insurer="${insurer.name}" placeholder="Valor / detalle" value="${escapeHtml(coverage.values[insurer.name])}"></td>`).join("")}
        </tr>
    `).join("");
    table.querySelector("tbody").innerHTML = sumRow + standardRows + additionalRows;

    table.querySelectorAll("[data-sum-type]").forEach((input) => input.addEventListener("change", () => {
        fleetSumTypes[input.dataset.sumType] = input.value;
        if (!isCustomFleetSum(input.value)) {
            fleetVehicles.forEach((vehicle) => delete fleetSumAmounts[`${vehicle.id}|${input.dataset.sumType}`]);
        }
        renderAllTables();
    }));
    table.querySelectorAll("[data-coverage-suma]").forEach((input) => input.addEventListener("input", () => {
        fleetCoverage[`${input.dataset.coverageSuma}|${input.dataset.insurer}|suma`] = input.value;
    }));
    table.querySelectorAll("[data-coverage-deducible]").forEach((input) => input.addEventListener("input", () => {
        fleetCoverage[`${input.dataset.coverageDeducible}|${input.dataset.insurer}|deducible`] = input.value;
    }));
    table.querySelectorAll("[data-additional-name]").forEach((input) => input.addEventListener("input", () => {
        const coverage = fleetAdditionalCoverages.find((item) => item.id === input.dataset.additionalName);
        if (coverage) coverage.name = input.value;
    }));
    table.querySelectorAll("[data-additional-value]").forEach((input) => input.addEventListener("input", () => {
        const coverage = fleetAdditionalCoverages.find((item) => item.id === input.dataset.additionalValue);
        if (coverage) coverage.values[input.dataset.insurer] = input.value;
    }));
    table.querySelectorAll("[data-delete-additional]").forEach((button) => button.addEventListener("click", () => {
        fleetAdditionalCoverages = fleetAdditionalCoverages.filter((item) => item.id !== button.dataset.deleteAdditional);
        renderAllTables();
    }));
}

function renderVehicleValuesTable() {
    const selected = selectedFleetInsurers();
    const table = document.getElementById("fleetValuesTable");
    const empty = document.getElementById("fleetValuesEmpty");
    const showValues = selected.some((insurer) => isCustomFleetSum(fleetSumTypes[insurer.name]));

    table.classList.toggle("fleetVehicleValuesTable--wide", selected.length > 3);
    table.querySelector("thead").innerHTML = `<tr><th>Vehículo (*)</th>${selected.map((insurer) => `<th>${insurer.name}</th>`).join("")}</tr>`;
    table.querySelector("tbody").innerHTML = showValues ? fleetVehicles.map((vehicle, index) => `
        <tr>
            <td>Auto ${index + 1}<br><small>${escapeHtml(`${vehicle.year} ${vehicle.description}`.trim() || "Sin descripción")}</small></td>
            ${selected.map((insurer) => {
                const type = fleetSumTypes[insurer.name] || "";
                const amount = getFleetVehicleSumAmount(vehicle.id, insurer.name);
                return `<td>${isCustomFleetSum(type) ? `<input data-sum-amount="${insurer.name}" data-vehicle-id="${vehicle.id}" data-numeric="decimal" inputmode="decimal" placeholder="Valor" value="${escapeHtml(amount)}">` : "-"}</td>`;
            }).join("")}
        </tr>
    `).join("") : "";

    table.hidden = !showValues || !fleetVehicles.length || !selected.length;
    empty.hidden = !table.hidden;
    table.querySelectorAll("[data-sum-amount]").forEach((input) => input.addEventListener("input", () => {
        restrictNumericInput(input);
        fleetSumAmounts[`${input.dataset.vehicleId}|${input.dataset.sumAmount}`] = input.value;
    }));
}

function renderAllTables() {
    renderVehicleTable();
    renderCoverageTable();
    renderVehicleValuesTable();
}

function restrictNumericInput(input) {
    const allowDecimal = input.dataset.numeric === "decimal";
    const previous = input.value;
    let value = previous.replace(allowDecimal ? /[^0-9.]/g : /[^0-9]/g, "");
    if (allowDecimal) {
        const parts = value.split(".");
        value = parts.shift() + (parts.length ? `.${parts.join("")}` : "");
    }
    input.value = value;
}

function formatFleetBirthDate(value) {
    if (!value) return "-";
    const date = new Date(`${value}T00:00:00`);
    return Number.isNaN(date.getTime()) ? "-" : date.toLocaleDateString("es-MX");
}

function capitalizeFleetName(input) {
    const words = input.value.split(" ");
    for (let index = 0; index < words.length; index += 1) {
        if (words[index]) words[index] = words[index][0].toUpperCase() + words[index].slice(1).toLowerCase();
    }
    input.value = words.join(" ");
}

function addFleetCoverage() {
    fleetAdditionalCoverages.push({ id: `fleet-additional-${Date.now()}`, name: "", values: {} });
    renderCoverageTable();
    document.querySelector("[data-additional-name]:last-of-type")?.focus();
}

function addFleetVehicle() {
    fleetVehicles.push({ id: `fleet-vehicle-${Date.now()}-${Math.random().toString(16).slice(2)}`, year: "", description: "", costs: {} });
    renderAllTables();
    const yearInputs = document.querySelectorAll("[data-field='year']");
    const firstInput = yearInputs[yearInputs.length - 1];
    firstInput?.focus();
}

function validateFleet() {
    const missing = [];
    if (!document.getElementById("fleetClientName").value.trim()) missing.push("Nombre o empresa");
    if (!document.getElementById("fleetClientBdy").value) missing.push("fecha de nacimiento");
    if (!document.getElementById("fleetAgent").value) missing.push("Agente");
    if (!document.getElementById("fleetPlan").value) missing.push("plan");
    if (!document.getElementById("fleetCoverage").value) missing.push("cobertura");
    const selected = selectedFleetInsurers();
    if (!selected.length) missing.push("al menos una aseguradora");
    if (!fleetVehicles.length) missing.push("al menos un auto");

    fleetVehicles.forEach((vehicle, index) => {
        if (!vehicle.year.trim()) missing.push(`modelo del auto ${index + 1}`);
        if (!vehicle.description.trim()) missing.push(`descripción del auto ${index + 1}`);
        selected.forEach((insurer) => {
            if (!String(vehicle.costs[insurer.name] || "").trim()) missing.push(`costo de ${insurer.name} en auto ${index + 1}`);
            if (isCustomFleetSum(fleetSumTypes[insurer.name]) && !getFleetVehicleSumAmount(vehicle.id, insurer.name).trim()) {
                missing.push(`valor asegurado de ${insurer.name} en auto ${index + 1}`);
            }
        });
    });

    if (missing.length) {
        alert(`Completa: ${missing.join(", ")}.`);
        return false;
    }
    return true;
}

function loadPdfImage(src) {
    return new Promise((resolve) => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            canvas.getContext("2d").drawImage(image, 0, 0);
            resolve({ data: canvas.toDataURL("image/png"), width: image.naturalWidth, height: image.naturalHeight });
        };
        image.onerror = () => resolve(null);
        image.src = src;
    });
}

function drawPdfImage(doc, image, x, y, maxWidth, maxHeight) {
    if (!image) return;
    const ratio = image.width / image.height;
    let width = maxWidth;
    let height = width / ratio;
    if (height > maxHeight) {
        height = maxHeight;
        width = height * ratio;
    }
    doc.addImage(image.data, "PNG", x + (maxWidth - width) / 2, y + (maxHeight - height) / 2, width, height);
}

async function generateFleetPDF() {
    if (!validateFleet()) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "letter" });
    const selected = selectedFleetInsurers();
    const pageWidth = doc.internal.pageSize.getWidth();
    const logos = { Swartz: await loadPdfImage("logo-Photoroom.png") };
    for (const insurer of selected) logos[insurer.name] = await loadPdfImage(insurer.logo);

    const azul = [27, 85, 145], azulClaro = [239, 246, 255], dorado = [216, 163, 74];
    const grisTexto = [24, 31, 42], grisSuave = [246, 248, 251], grisLinea = [226, 232, 240], grisMuted = [102, 112, 133];
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setFillColor(...grisSuave);
    doc.rect(0, 0, pageWidth, pageHeight, "F");
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(10, 6, pageWidth - 20, pageHeight - 13, 3, 3, "F");
    drawPdfImage(doc, logos.Swartz, 14, 9, 38, 15);
    doc.setFont(undefined, "bold");
    doc.setTextColor(...grisTexto);
    doc.setFontSize(17);
    doc.text("Cotización de flotilla", 62, 14);
    doc.setFont(undefined, "normal");
    doc.setTextColor(...grisMuted);
    doc.setFontSize(8.5);
    doc.text("Reporte de cotización con costos por vehículo", 62, 20);

    doc.setDrawColor(...grisLinea);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(214, 8, 51, 18, 3, 3, "FD");
    doc.setFont(undefined, "bold");
    doc.setTextColor(...grisMuted);
    doc.setFontSize(6.8);
    doc.text("FECHA", 219, 15);
    doc.setTextColor(...grisTexto);
    doc.setFontSize(8.2);
    doc.text(document.getElementById("fleetDate").textContent, 238, 15);

    doc.setFillColor(255, 250, 237);
    doc.setDrawColor(247, 215, 155);
    doc.roundedRect(62, 24, 42, 8, 4, 4, "FD");
    doc.setTextColor(145, 91, 24);
    doc.setFontSize(6.8);
    doc.text(`PLAN ${document.getElementById("fleetPlan").value.toUpperCase()}`, 67, 29.2);
    doc.setFillColor(239, 246, 255);
    doc.setDrawColor(191, 219, 254);
    doc.roundedRect(108, 24, 47, 8, 4, 4, "FD");
    doc.setTextColor(...azul);
    doc.text("FLOTILLA", 116, 29.2);

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(...grisLinea);
    doc.roundedRect(14, 35, pageWidth - 28, 22, 3, 3, "FD");
    doc.setFontSize(6.8);
    doc.setTextColor(...grisMuted);
    doc.text("CLIENTE", 20, 42);
    doc.text("PLAN", 92, 42);
    doc.text("COBERTURA", 132, 42);
    doc.text("VEHÍCULOS", 184, 42);
    doc.text("AGENTE", 222, 42);
    doc.setFont(undefined, "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(...grisTexto);
    doc.text(document.getElementById("fleetClientName").value || "-", 20, 47, { maxWidth: 66 });
    doc.text(document.getElementById("fleetPlan").value, 92, 47);
    doc.text(document.getElementById("fleetCoverage").value, 132, 47, { maxWidth: 44 });
    doc.text(String(fleetVehicles.length), 184, 47);
    doc.text(document.getElementById("fleetAgent").value || "-", 222, 47, { maxWidth: 38 });
    doc.setFont(undefined, "normal");
    doc.setFontSize(7.2);
    doc.setTextColor(...grisMuted);
    doc.text(`Nac: ${formatFleetBirthDate(document.getElementById("fleetClientBdy").value)}   C.P: ${document.getElementById("fleetClientCP").value || "-"}`, 20, 52, { maxWidth: 68 });
    doc.text("Costos anuales capturados por vehículo", 92, 52);

    doc.setDrawColor(...dorado);
    doc.setLineWidth(.9);
    doc.line(14, 62, pageWidth - 14, 62);

    const vehicleHead = [{ content: "Vehículo", styles: { halign: "left" } }, ...selected.map(() => ({ content: "", styles: { halign: "center" } }))];
    const vehicleBody = fleetVehicles.map((vehicle) => [
        `${vehicle.year}\n${vehicle.description}`,
        ...selected.map((insurer) => money(vehicle.costs[insurer.name]))
    ]);

    doc.autoTable({
        startY: 66,
        head: [vehicleHead],
        body: vehicleBody,
        margin: { left: 18, right: 18 },
        tableWidth: pageWidth - 36,
        theme: "grid",
        headStyles: { fillColor: [255, 255, 255], textColor: grisTexto, lineColor: grisLinea, lineWidth: .25, minCellHeight: 13 },
        styles: { fontSize: 7.5, cellPadding: 2.2, valign: "middle", halign: "center", lineColor: grisLinea, lineWidth: .2 },
        columnStyles: { 0: { cellWidth: 68, halign: "left", fontStyle: "bold", fillColor: azulClaro } },
        alternateRowStyles: { fillColor: [249, 250, 252] },
        didDrawCell: (data) => {
            if (data.section === "head" && data.column.index > 0) {
                drawPdfImage(doc, logos[selected[data.column.index - 1].name], data.cell.x + 2, data.cell.y + 1, data.cell.width - 4, data.cell.height - 2);
            }
        }
    });

    const coverageStart = (doc.lastAutoTable?.finalY || 60) + 8;
    const coverageHead = [{ content: "Cobertura", styles: { halign: "left" } }, ...selected.map(() => ({ content: "", colSpan: 2 }))];
    const coverageBody = [[
        "Tipo de suma asegurada",
        ...selected.map((insurer) => ({ content: getFleetSumTypeDisplay(insurer.name), colSpan: 2 }))
    ]];
    getFleetVisibleCoverageRows().forEach((coverage) => {
        coverageBody.push([
            coverage,
            ...selected.flatMap((insurer) => [
                getFleetSumDisplay(coverage, insurer.name) || "-",
                getFleetDeductibleValue(coverage, insurer.name) || "-"
            ])
        ]);
    });
    fleetAdditionalCoverages.forEach((coverage) => {
        const name = coverage.name.trim() || "Cobertura adicional";
        const values = selected.flatMap((insurer) => [coverage.values[insurer.name] || "-", "-"]);
        if (name !== "Cobertura adicional" || values.some((value) => value !== "-")) coverageBody.push([name, ...values]);
    });
    const coverageTableWidth = pageWidth - 36;
    const coverageLabelWidth = selected.length === 1 ? 58 : Math.min(68, coverageTableWidth * 0.27);
    const coveragePairWidth = (coverageTableWidth - coverageLabelWidth) / selected.length;
    const coverageColumnStyles = { 0: { cellWidth: coverageLabelWidth, halign: "left", fontStyle: "bold", fillColor: azulClaro } };
    selected.forEach((_, index) => {
        coverageColumnStyles[1 + (index * 2)] = { cellWidth: coveragePairWidth * 0.58, halign: "center" };
        coverageColumnStyles[2 + (index * 2)] = { cellWidth: coveragePairWidth * 0.42, halign: "center" };
    });
    doc.autoTable({
        startY: coverageStart,
        head: [coverageHead],
        body: coverageBody,
        margin: { left: 18, right: 18 },
        tableWidth: coverageTableWidth,
        theme: "grid",
        headStyles: { fillColor: [255, 255, 255], textColor: grisTexto, lineColor: grisLinea, lineWidth: .25, minCellHeight: 13 },
        styles: { fontSize: 7, cellPadding: 2.2, valign: "middle", halign: "center", lineColor: grisLinea, lineWidth: .2 },
        columnStyles: coverageColumnStyles,
        didDrawCell: (data) => {
            if (data.section === "head" && data.column.index > 0) {
                const insurer = selected[Math.floor((data.column.index - 1) / 2)];
                if (insurer) drawPdfImage(doc, logos[insurer.name], data.cell.x + 2, data.cell.y + 1, data.cell.width - 4, data.cell.height - 2);
            }
        }
    });

    const hasVehicleValueTable = selected.some((insurer) => isCustomFleetSum(fleetSumTypes[insurer.name])) && fleetVehicles.length;
    if (hasVehicleValueTable) {
        const valuesStart = (doc.lastAutoTable?.finalY || coverageStart) + 7;
        const valuesHead = [{ content: "Valores por vehículo (*)", styles: { halign: "left" } }, ...selected.map(() => ({ content: "" }))];
        const valuesBody = fleetVehicles.map((vehicle, index) => [
            `Auto ${index + 1}\n${vehicle.year} ${vehicle.description}`.trim(),
            ...selected.map((insurer) => isCustomFleetSum(fleetSumTypes[insurer.name])
                ? money(getFleetVehicleSumAmount(vehicle.id, insurer.name))
                : "-")
        ]);
        const valuesTableWidth = pageWidth - 36;
        const valuesLabelWidth = selected.length === 1 ? 68 : Math.min(78, valuesTableWidth * 0.28);
        const valuesPairWidth = (valuesTableWidth - valuesLabelWidth) / selected.length;
        const valuesColumnStyles = { 0: { cellWidth: valuesLabelWidth, halign: "left", fontStyle: "bold", fillColor: azulClaro } };
        selected.forEach((_, index) => {
            valuesColumnStyles[index + 1] = { cellWidth: valuesPairWidth, halign: "center" };
        });
        doc.autoTable({
            startY: valuesStart,
            head: [valuesHead],
            body: valuesBody,
            margin: { left: 18, right: 18 },
            tableWidth: valuesTableWidth,
            theme: "grid",
            headStyles: { fillColor: [255, 250, 237], textColor: [124, 74, 17], lineColor: [243, 210, 139], lineWidth: .25, minCellHeight: 13 },
            styles: { fontSize: 7.2, cellPadding: 2.2, valign: "middle", halign: "center", lineColor: grisLinea, lineWidth: .2 },
            columnStyles: valuesColumnStyles,
            didDrawCell: (data) => {
                if (data.section === "head" && data.column.index > 0) {
                    drawPdfImage(doc, logos[selected[data.column.index - 1].name], data.cell.x + 2, data.cell.y + 1, data.cell.width - 4, data.cell.height - 2);
                }
            }
        });
    }

    const notaVigencia = "Cotizacion con vigencia estimada de 15 dias naturales, excepto Qualitas con vigencia de 7 dias. La vigencia no garantiza precio fijo: el costo puede cambiar sin previo aviso por ajustes, promociones por tiempo limitado, disponibilidad o decision de la aseguradora. Una vez vencida la vigencia, el costo queda sujeto a recotizacion y es mas propenso a cambios.";
    const notaValores = "* El valor asegurado se captura de forma independiente para cada auto y aseguradora cuando aplica Valor Convenido, Valor Factura u otra modalidad similar.";
    const notaVigenciaLineas = doc.splitTextToSize(notaVigencia, pageWidth - 28);
    const notaValoresLineas = hasVehicleValueTable ? doc.splitTextToSize(notaValores, pageWidth - 28) : [];
    const alturaNotas = (notaValoresLineas.length * 4) + (notaVigenciaLineas.length * 4) + 14;
    let noteY = (doc.lastAutoTable?.finalY || 190) + 7;
    if (noteY + alturaNotas > pageHeight - 6) {
        doc.addPage("letter", "landscape");
        doc.setFillColor(...grisSuave);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
        doc.setFillColor(255, 255, 255);
        doc.roundedRect(10, 6, pageWidth - 20, pageHeight - 13, 3, 3, "F");
        doc.setFont(undefined, "bold");
        doc.setFontSize(12);
        doc.setTextColor(...azul);
        doc.text("Notas de la cotización", 18, 20);
        noteY = 31;
    }
    doc.setFontSize(7);
    doc.setTextColor(...grisMuted);
    if (notaValoresLineas.length) {
        doc.text(notaValoresLineas, 14, noteY);
        noteY += notaValoresLineas.length * 4 + 3;
    }
    doc.text(notaVigenciaLineas, 14, noteY);
    doc.text("Documento generado por Swartz Seguros y Contabilidad", 14, noteY + (notaVigenciaLineas.length * 4) + 4);

    const filename = document.getElementById("fleetClientName").value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || "cliente";
    doc.save(`cotizacion-flotilla-${filename}.pdf`);
}

function clearFleet() {
    fleetVehicles = [];
    fleetCoverage = {};
    fleetAdditionalCoverages = [];
    fleetSumTypes = {};
    fleetSumAmounts = {};
    document.getElementById("fleetClientName").value = "";
    document.getElementById("fleetClientBdy").value = "";
    document.getElementById("fleetClientCP").value = "";
    document.getElementById("fleetAgent").value = "";
    document.getElementById("fleetPlan").value = "";
    document.getElementById("fleetCoverage").value = "";
    document.querySelectorAll(".fleetInsurer__Check").forEach((check) => { check.checked = false; });
    renderAllTables();
}

document.getElementById("fleetDate").textContent = new Date().toLocaleDateString("es-MX");
renderInsurers();
renderAllTables();
document.getElementById("fleetClientName").addEventListener("input", (event) => capitalizeFleetName(event.currentTarget));
document.getElementById("fleetClientCP").addEventListener("input", (event) => restrictNumericInput(event.currentTarget));
document.getElementById("fleetPlan").addEventListener("change", () => {
    fleetCoverage = {};
    fleetSumTypes = {};
    fleetSumAmounts = {};
    renderCoverageTable();
});
document.getElementById("addFleetVehicle").addEventListener("click", addFleetVehicle);
document.getElementById("addFleetCoverage").addEventListener("click", addFleetCoverage);
document.getElementById("generateFleetPDF").addEventListener("click", generateFleetPDF);
document.getElementById("clearFleet").addEventListener("click", clearFleet);
