/**
 * Created by Maxime on 2015-09-24.
 */
var str = "12/5*9+9.4*2".replace(/[^-()\d/*+.]/g, '');

var f = [];
Math.factorial = function(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    if (f[n] > 0) {
        return f[n];
    }
    return f[n] = Math.factorial(n-1) * n;
}

// Classe Calculator
// Toutes les m�thodes sauf `equals` retournent `this`, ce qui permet de chainer les appels
// Ex:
// var calculator = new Calculator()
// calculator.add(2).add(3).subtract(2).equals()
// Retourne : 2
// 2 + 3 - 2 = 2
var Calculator = function () {
    var memory;

    var equation = '';

    // Ajouter seulement une valeur � l'�quation
    // Sera utile pour lorsque cette classe sera connect�e au UI
    this.value = function(value) {
        if(typeof value !== 'undefined'){
            equation += parseFloat(value);
        }
        return this;
    }

    // R�initialiser l'�quation
    this.clear = function() {
        equation = '';
        return this;
    }

    this.add = function(value) {
        equation += '+';
        if(typeof value !== 'undefined'){
            equation += parseFloat(value);
        }
        return this;
    }

    this.subtract = function (value) {
        equation += '-'
        if(typeof value !== 'undefined'){
            equation += parseFloat(value);
        }
        return this;
    }

    this.multiply = function (value) {
        equation += '*'
        if(typeof value !== 'undefined'){
            equation += parseFloat(value);
        }
        return this;
    }

    this.divide = function (value) {
        equation += '/'
        if(typeof value !== 'undefined'){
            if (value == 0) {
                throw "Division par z�ro!!!";
            }
            equation += parseFloat(value);
        }
        return this;
    }

    this.sin = function(value) {
        equation += 'Math.sin(' + parseFloat(value) + ')'
        return this;
    }

    this.cos = function(value) {
        equation += 'Math.cos(' + parseFloat(value) + ')'
        return this;
    }

    this.tan = function() {
        equation += 'Math.tan(' + parseFloat(value) + ')'
        return this;
    }

    this.setMemory = function(memoryValue) {
        memory = memoryValue;
    }

    this.getMemory = function() {
        return memory;
    }

    this.factorial = function(value) {
        if(typeof value === 'undefined'){
            equation = 'Math.factorial(' + this.equals() + ')'
        } else {
            equation += 'Math.factorial(' + parseFloat(value) + ')'
        }
        return this;
    }

    this.equals = function () {
        // Il faut �tre tr�s prudent avec eval !!! Eval pourrait permettre d'injecter du code malicieux et l'ex�cuter
        // C'est pourquoi toutes nos variables 'value' sont pass�es dans 'parseFloat'
        console.log('Evaluating :', equation);
        var equationSolution = eval(equation);
        equation = '';
        return equationSolution;
    }
}

$(document).ready (function(){


});

