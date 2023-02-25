function parseString(file)
{
    let string = "1, M519, MALIBU AFTER SUN 100ML, 5025135113895, 1.85€;1A, M469, MALIBU LOÇÃO SOLAR SPF15 100ml, 5025135113796, 2.60€;2, M479, MALIBU LOÇÃO SOLAR SPF20 100ml, 5025135113819, 2.60€;3, M229, MALIBU LOÇÃO SOLAR SPF30 100ml, 5025135113833, 3.80€;4, M269, MALIBU LOÇÃO SOLAR SPF50 100ml, 5025135113390, 4.30€;5, M533, MALIBU AFTERSUN ALOE VERA 100ml, 5025135114649, 1.95€;6, M839, MALIBU OLEO BRONZEADOR SPFO 100ml, 5025135118425, 2.95€;7, M859, MALIBU ÓLEO COCO SPFB 100ml, 5025135120107, 2.95€;8, M465, MALIBU OLEO SECO SPRAY SPF15 100ml, 5025135113871, 2.90€;9, M473, MALIBU OLEO SECO SPRAY SPF20 100ml, 5025135113758, 2.90€;10, M225, MALIBU OLEO SECO SPRAY SPF30 100ml, 5025135116254, 3.95€;10A, M265, MALIBU OLEO SECO SPRAY SPF50 100ml, 5025135118838, 4.15€;11, M640BL, MALIBU BATON LIP STICK SPF30 BLISTER DE JUN, 5025135118142, 3.00€;12, M630, MALIBU BATON LIP STICK SPF30, 5025135117701, 1.50€;12A, M640CE, MALIBU BATON LIP STICK SPF30 CX 24 UNIDADES, 5025135120305, 24.00€;13, M902FS, MALIBU LOÇÃO FACIAL SPF50 40ml + BATON SPF30, 5025135117701A, 4.95€;14, M24100, MORNY ALOE VERA 300ML, 5025135411649, 1.80€;15, M511FS, MALIBU AFTERSUN 200ml, 5025135112485, 3.35€;16, M540FS, MALIBU AFTERSUN WITH TAN EXTENDER 200ml, 5025135112775, 4.05€;16A, M460FS, MALIBU LOÇÃO SOLAR SPF15 200ml, 5025135111327, 4.65€;17, M470FS, MALIBU LOÇÃO SOLAR SPF20 200ml, 5025135111396, 4.95€;18, M221FS, MALIBU LOÇÃO SOLAR SPF30 200ml, 5025135112577, 6.40€;19, M260FS, MALIBU LOÇÃO SOLAR SPF50 200ml, 5025135113376, 6.90€;20, M250FS, MALIBU LOÇÃO SOLAR SPF 50 KIDS 200ml, 5025135116599, 6.90€;21, M512FS, MALIBU AFTERSUN SPRAY 200ml, 5025135112355, 4.05€;22, M530FS, MALIBU AFTERSUN GEL C/ ALOE VERA 200ml, 5025135112751, 4.05€;22A, M452FS, MALIBU LOÇÃO SOLAR SPRAY SPF8 200ml, 5025135112294, 4.90€;23, M462FS, MALIBU LOÇÃO SOLAR SPRAY SPF15 200ml, 5025135112317, 5.05€;24, M476FS, MALIBU LOÇÃO SOLAR SPRAY SPF20 200ml, 5025135000522, 5.90€;25, M222FS, MALIBU LOÇÃO SOLAR SPRAY SPF30 200ml, 5025135112331, 6.50€;26, M262FS, MALIBU LOÇÃO SOLAR SPRAY SPF50 200ml, 5025135116575, 6.90€;27, M856FS, MALIBU OLEO COCO SPRAY SPF6 200ml, 5025135119286, 4.85€;28, M857FS, MALIBU OLEO COCO SPRAY SPF15 200ml, 5025135119309, 5.30€;29, M441FS, MALIBU ÓLEO SECO SPRAY SPF6 200ml, 5025135115202, 4.85€;30, M461FS, MALIBU ÓLEO SECO SPRAY SPF15 200ml, 5025135112157, 5.05€;31, M471FS, MALIBU ÓLEO SECO SPRAY SPF20 200ml, 5025135113437, 6.05€;32, M223FS, MALIBU OLEO SECO SPRAY SPF30 200ml, 5025135116278, 6.50€;33, M846, MALIBU ÓLEO BRONZEADOR ARGAN SPF8 200ML, 5025135119224, 5.10€;34, M847, MALIBU ÓLEO BRONZEADOR ARGAN SPF15 200ML, 5025135119248, 5.30€;35, M830FS, MALIBU ÓLEO BRONZEADOR COCO SPFO 200ml, 5025135114663, 4.90€;36, M442, MALIBU OLEO BRONZEADOR COCO SPF6 200ml, 5025135117947, 5.00€;37, M467, MALIBU OLEO BRONZEADOR COCO SPF15 200ml, 5025135117978, 5.30€;38, M906, MALIBU AFTERSUN 75ml, 5025135117886, 1.60€;39, M904FS, MALIBU LOÇÃO SOLAR SPF 15 75ml, 502513117858, 1.65€;40, M905FS, MALIBU LOÇÃO SOLAR SPF20 75ml, 5025135117862, 1.70€;41, M24105, MORNY loção corporal aloe vera 200ml, 5025135411700, 1.35€;42, M24104, MORNY gel de banho aloe vera 200ml, 5025135412172, 1.35€;43, M510FS, MALIBU AFTERSUN 400ml, 5025135111341, 4.30€;45, M820FS, MALIBU MANTEIGA BRONZEADORA CENOURA SPFO 300ML, 5025135114687, 6.40€;46, M670FS, MALIBU MANTEIGA BRONZEADORA CENOURA SPF8 300ML, 5025135000997, 6.75€;47, M250, MALIBU LOÇÃO SOLAR SIC KIDS SPF50 175ml, 5025135001017, 7.30€;48, M222, MALIBU LOÇÃO SOLAR SPRAY CONTINUO SPF30 175ml, 5025135117008, 6.70€;49, M461, MALIBU ÓLEO SECO SPRAY CONTÍNUO SPF15 175m, 5025135116919, 5.60€";

    let lines = string.split(";");

    for (let index = 0; index < lines.length; index++) {
        let line = lines[index].split(",");

        var colDiv = document.createElement("div");
        colDiv.className = "col-lg-3 col-sm-3";

        var boxDiv = document.createElement("div");
        boxDiv.className = "box_main";

        var h4First = document.createElement("h4");
        h4First.className = "shirt_text";
        h4First.innerText = line[1];

        var h4Second = document.createElement("h4");
        h4Second.className = "shirt_text";
        h4Second.innerText = line[2];

        var p = document.createElement("p");
        p.className = "price_text";
        p.innerText = "Preço";

        var span = document.createElement("span");
        span.style.color = "#262626";
        span.innerHTML = " " + line[4];

        var imgDiv = document.createElement("div");
        imgDiv.className = "tshirt_img";

        var img = document.createElement("img");
        img.src = 'images/malibu/' + line[3].trim() +  '.jpg';


        var btnMainDiv = document.createElement("div");
        
        var emptyDiv = document.createElement("div");
        var inputType = document.createElement("input");
        inputType.type = "number";
        inputType.className = "buy_bt";
        
        p.appendChild(span);
        emptyDiv.appendChild(inputType);
        btnMainDiv.appendChild(emptyDiv);

        imgDiv.appendChild(img);

        
        boxDiv.appendChild(h4First);
        boxDiv.appendChild(h4Second);
        boxDiv.appendChild(p);
        boxDiv.appendChild(imgDiv);
        boxDiv.appendChild(btnMainDiv);

        colDiv.append(boxDiv);

        document.getElementById("append").appendChild(colDiv);
    }
}
/*
<div class="col-lg-4 col-sm-4">
<div class="box_main">
   <h4 class="shirt_text">TM-1</h4>
   <h4 class="shirt_text">180x90</h4>
   <p class="price_text">Preço  <span style="color: #262626;">3.5€</span></p>
   <div class="tshirt_img"><img src="images/1.jpg"></div>
   <div class="btn_main">
      <div><input type="number" class="buy_bt"></div>
   </div>
</div>
</div>
*/
window.onload = function () {
    parseString();
};

