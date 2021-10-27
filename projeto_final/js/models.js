let modelArea = document.getElementById("model-area");

let modelTitle = document.getElementsByClassName("model-title");
let modelDescription = document.getElementsByClassName("model-description");

let modelImg = document.getElementsByClassName("model-img");

let techTexts = document.getElementsByClassName("text-right");

document.getElementsByClassName

function showDetails(model) {
    let titleDescription = getTitleAndDescription(model);
    let specification = getTechicalSpec(model);
    let imgPath = getImgsPath(model);

    for (let i = 0; i < 2; i++) {
        modelTitle[i].innerHTML = titleDescription.title;
        modelDescription[i].innerHTML = titleDescription.description;
        modelImg[i].setAttribute("src", imgPath);
    }

    for (let i = 0; i < 4; i++) {
        techTexts[i].innerHTML = specification[i].techText;
    }

    modelArea.style.display = "block";
}

function getImgsPath(model) {
    if (model == "urus") { return "./img/urus1.webp" } else if (model == "huracan") { return "./img/huracan1.jpg" } else if (model == "aventator") { return "./img/aventador1.jpg" } else { return null }
}

function getTechicalSpec(model) {
    if (model == "urus") {
        return [
            { techText: "3,996 cm³ (243.85 cu in)" },
            { techText: "650 CV (478 kW) @ 6,000 rpm" },
            { techText: "305 km/h" },
            { techText: "3.6 s" },
        ]
    } else if (model == "huracan") {
        return [
            { techText: "5,204 cm³ (317.57 cu in)" },
            { techText: "470/640 at 8,000 rpm" },
            { techText: "310 km/h" },
            { techText: "3.0 s" },
        ]
    } else if (model == "aventator") {
        return [
            { techText: "6,498 cm³" },
            { techText: "566 kW (770 CV) at 8,500 rpm" },
            { techText: ">350 km/h" },
            { techText: "2.8 s" },
        ]
    } else {
        return {
            title: "NOT FOUND",
            description: "NOT FOUND"
        }
    }
}

function getTitleAndDescription(model) {
    if (model == "urus") {
        return {
            title: "URUS",
            description: "A alma de um super carro esportivo e a funcionalidade de um SUV: Lamborghini Urus é o primeiro Super Sport Utility Vehicle do mundo. Com proporções extremas, design de tirar o fôlego, extraordinária dinâmica de direção e desempenho de tirar o fôlego, o Urus representa a liberdade em seu estado quintessencial. Você pode experimentar qualquer estrada, desde a trilha até a areia, gelo, cascalho ou pedras, desbloqueando assim qualquer estrada. Você pode explorar qualquer novo terreno, expressando-se assim."
        }
    } else if (model == "huracan") {
        return {
            title: "HURACÁN",
            description: "Um carro superesportivo criado com um propósito único, o Huracán STO oferece toda a sensação e tecnologia de um carro de corrida genuíno em um modelo de estrada legal. O know-how de anos de automobilismo da Lamborghini, intensificado por uma herança vencedora, está concentrado no novo Huracán STO. Sua extrema aerodinâmica, dinâmica de manuseio aprimorada, conteúdo leve e o motor V10 de alto desempenho até hoje se unem, prontos para desencadear todas as emoções da pista de corrida em sua vida cotidiana."
        }
    } else if (model == "aventator") {
        return {
            title: "AVENTADOR",
            description: "A Lamborghini criou o Aventador SVJ para enfrentar os desafios de frente, combinando tecnologia de ponta com design extraordinário, sempre se recusando a fazer concessões. Em um futuro impulsionado pela tecnologia, é fácil perder a verdadeira emoção de dirigir. Mas no futuro moldado pela Lamborghini, isso não ficará para trás, porque sempre haverá um motorista ao volante."
        }
    } else {
        return {
            title: "NOT FOUND",
            description: "NOT FOUND"
        }
    }
}