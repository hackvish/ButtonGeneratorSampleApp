var x = "ASDF";
document.addEventListener('DOMContentLoaded', init, false);
var previewButton;

function init() {
    previewButton = document.getElementById("previewButton");
    initializeDefaultValues();
    setupHandlers();
}

function setupHandlers() {

    var btnHeightEvt = document.getElementById("button-height");
    btnHeightEvt.addEventListener("change", function() {
        var val = this.value;
        document.getElementById("btnHeightVal").innerHTML = val;
        changeBtnHeight(val);
    });

    var btnWidthEvt = document.getElementById("button-width");
    btnWidthEvt.addEventListener("change", function() {
        var val = this.value;
        document.getElementById("btnWidthVal").innerHTML = val;
        changeBtnWidth(val);
    });

    var btnColorEvt = document.getElementById("button-color");
    btnColorEvt.addEventListener('change', function() {
        var val = this.value;
        changeButtonColor("backgroundColor", val);
    });

    var fontSizeEvt = document.getElementById("text-size");
    fontSizeEvt.addEventListener("change", function() {
        var val = this.value;
        document.getElementById("textSizeVal").innerHTML = val;
        changeFontSize(val);
    });

    var textColor = document.getElementById("textColor");
    textColor.addEventListener('change', function() {
        var val = this.value;
        changeBorderColor("color", val);
    });

    var textBold = document.getElementById("textBold");
    textBold.addEventListener("change", function() {
        var val = this.checked ? "bold" : "normal" ;
        toggleBooleanProperties("fontWeight", val);
    });

    var textItalic = document.getElementById("textItalic");
    textItalic.addEventListener("change", function() {
        var val = this.checked ? "italic" : "normal";
        toggleBooleanProperties("fontStyle", val);
    });

    var borderSizeEvt = document.getElementById("border-size");
    borderSizeEvt.addEventListener("change", function() {
        var val = this.value;
        document.getElementById("borderSizeVal").innerHTML = val;
        changeBorderSize(val);
    });

    var borderStyle = document.getElementById("borderStyle");
    borderStyle.addEventListener('change', function() {
        var val = this.value;
        changeBorderStyle("borderStyle",val);
    });

    var borderColor = document.getElementById("borderColor");
    borderColor.addEventListener('change', function() {
        var val = this.value;
        changeBorderColor("borderColor", val);
    });
}

function changeBtnHeight(val) {
    changePXProperties("paddingTop", val);
    changePXProperties("paddingBottom", val);
}

function changeBtnWidth(val) {
    changePXProperties("paddingLeft", val);
    changePXProperties("paddingRight", val);
}

function changeFontSize(val) {
    changePXProperties("fontSize", val);
}

function changeBorderSize(val) {
    changePXProperties("borderWidth", val);   
}

function changeBorderStyle(style, val) {
    reinitializeButton(style, val);
}

function changeBorderColor(style, val) {
    reinitializeButton(style, val);
}

function changeButtonColor(style, val) {
    reinitializeButton(style, val);
}

function changePXProperties(style, val) {
    val += "px";
    reinitializeButton(style, val);
}

function toggleBooleanProperties(style, val) {
    reinitializeButton(style, val);
}

function reinitializeButton(styleKey, value) {
    previewButton.style[styleKey] = value;
}

function initializeDefaultValues() {
        var btnHeightVal = document.getElementById("button-height").value;
        document.getElementById("btnHeightVal").innerHTML = btnHeightVal;
        changeBtnHeight(btnHeightVal);

        var btnWidthVal = document.getElementById("button-width").value;
        document.getElementById("btnWidthVal").innerHTML = btnWidthVal;
        changeBtnWidth(btnWidthVal);

        var fontSizeVal = document.getElementById("text-size").value;
        document.getElementById("textSizeVal").innerHTML = fontSizeVal;
        changeFontSize(fontSizeVal);

        var borderSizeVal = document.getElementById("border-size").value;
        document.getElementById("borderSizeVal").innerHTML = borderSizeVal;
        changeBorderSize(borderSizeVal);

        previewButton.style['backgroundColor'] = 'green';
        previewButton.style['color'] = 'black';
        previewButton.style['borderStyle'] = 'none';
        previewButton.style['borderColor'] = 'black';
}

function generateCSS() {
    var element = document.getElementById("previewButton");
    var css = window.getComputedStyle(element);
    var result = ".myButton {";
    for (var i=0; i<css.length; i++) {
        //console.log(css[i] +'='+css.getPropertyValue(""+css[i]))
        result += "\n";
        result += css[i] +':'+css.getPropertyValue(""+css[i]);
        
    }
    result += "\n}";
    //document.getElementById("resultCss").value = result;

    var myElement = document.getElementById('previewButton');
    var myElementStyle = myElement.style;

    var resultCss = myElementStyle["cssText"];
    console.log(resultCss);
    resultCss = resultCss.replace(/;/g, ";\n");
    resultCss = ".myButton {\n" + resultCss + "}";
    document.getElementById("resultCss").value = resultCss;
}