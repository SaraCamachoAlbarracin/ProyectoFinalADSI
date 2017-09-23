/ *!
 * JQuery JavaScript Library v1.12.4
 * Http://jquery.com/
 *
 * Incluye Sizzle.js
 * Http://sizzlejs.com/
 *
 * Copyright jQuery Foundation y otros colaboradores
 * Liberado bajo la licencia del MIT
 * Http://jquery.org/license
 *
 * Fecha: 2016-05-20T17: 17Z
 * /

(Función (global, fábrica) {

	If (typeof module === "objeto" && typeof module.exports === "objeto") {
		// Para CommonJS y entornos CommonJS-like donde una `ventana` apropiada
		// está presente, ejecute la fábrica y obtenga jQuery.
		// Para entornos que no tienen una `ventana` con un` documento`
		// (como Node.js), exponga una fábrica como module.exports.
		// Esto acentúa la necesidad de crear una "ventana" real.
		// eg var jQuery = require ("jquery") (ventana);
		// Ver boleto # 14549 para más información.
		Module.exports = global.document?
			Fábrica (global, true):
			Función (w) {
				If (! W.document) {
					Throw new Error ("jQuery requiere una ventana con un documento");
				}
				Fábrica de vuelta (w);
			};
	} Else {
		Fábrica (global);
	}

// Pasar si la ventana no está definida todavía
} (Ventana de typeof! == "undefined"?: This, function (window, noGlobal) {

// Soporte: Firefox 18+
// No puede estar en modo estricto, varias libs incluyendo ASP.NET trace
// la pila a través de arguments.caller.callee y Firefox muere si
// intenta localizar a través de las cadenas de llamadas "use strict". (# 13335)
// "uso estricto";
Var deletedIds = [];

Var document = window.document;

Var slice = deletedIds.slice;

Var concat = deletedIds.concat;

Var push = deletedIds.push;

Var indexOf = deletedIds.indexOf;

Var class2type = {};

Var toString = class2type.toString;

Var hasOwn = class2type.hasOwnProperty;

Var support = {};



Var
	Version = "1.12.4",

	// Definir una copia local de jQuery
	JQuery = function (selector, context) {

		// El objeto jQuery es en realidad sólo el constructor init 'enhanced'
		// Necesita init si se llama a jQuery (solo permite que el error sea lanzado si no se incluye)
		Return new jQuery.fn.init (selector, context);
	},

	// Soporte: Android <4.1, IE <9
	// Asegurese de recortar BOM y NBSP
	Rtrim = / ^ [\ s \ uFEFF \ xA0] + | [\ s \ uFEFF \ xA0] + $ / g,

	// Combina la cadena discontinua para camelizing
	RmsPrefix = / ^ - ms- /,
	RdashAlpha = / - ([\ da-z]) / gi,

	// Utilizado por jQuery.camelCase como devolución de llamada para reemplazar ()
	FcamelCase = función (todo, letra) {
		Return letter.toUpperCase ();
	};

JQuery.fn = jQuery.prototype = {

	// Se usa la versión actual de jQuery
	Jquery: versión,

	Constructor: jQuery,

	// Inicio con un selector vacío
	Selector: "",

	// La longitud predeterminada de un objeto jQuery es 0
	Longitud: 0,

	ToArray: function () {
		Return slice.call (this);
	},

	// Obtener el elemento Nth en el conjunto de elementos combinados OR
	// Obtener el conjunto conjunto de elementos como un arreglo limpio
	Get: function (num) {
		Return num! = Null?

			// Devuelve sólo un elemento del conjunto
			(Num <0? Este [num + this.length]: este [num]):

			// Devuelve todos los elementos de un array limpio
			Slice.call (este);
	},

	// Toma una matriz de elementos y la empuja sobre la pila
	// (devolviendo el nuevo conjunto de elementos emparejados)
	PushStack: function (elems) {

		// Construir un nuevo conjunto de elementos combinados jQuery
		Var ret = jQuery.merge (this.constructor (), elems);

		// Añade el objeto antiguo a la pila (como referencia)
		Ret.prevObject = this;
		Ret.context = this.context;

		// Devuelve el conjunto de elementos recién formado
		Return ret;
	},

	// Ejecuta una devolución de llamada para cada elemento del conjunto emparejado.
	Each: function (devolución de llamada) {
		Return jQuery.each (esto, devolución de llamada);
	},

	Mapa: función (devolución de llamada) {
		Return this.pushStack (jQuery.map (this, function (elem, i) {
			Return callback.call (elem, i, elem);
		}));
	},

	Slice: function () {
		Return this.pushStack (slice.apply (esto, argumentos));
	},

	Primero: function () {
		Return this.eq (0);
	},

	Last: function () {
		Return this.eq (-1);
	},

	Eq: función (i) {
		Var len = this.length,
			J = + i + (i <0} len: 0);
		Return this.pushStack (j> = 0 && j <len? [This [j]]: []);
	},

	End: function () {
		Return this.prevObject || This.constructor ();
	},

	// Sólo para uso interno.
	// Se comporta como el método de un Array, no como un método jQuery.
	empuja empuja,
	Sort: deletedIds.sort,
	Empalme: deletedIds.splice
};

JQuery.extend = jQuery.fn.extend = function () {
	Var src, copyIsArray, copia, nombre, opciones, clonar,
		Target = arguments [0] || {},
		I = 1,
		Length = arguments.length,
		Profundo = falso;

	// Manejar una situación de copia profunda
	If (tipo de destino === "booleano") {
		Profundidad = objetivo;

		// omite el booleano y el objetivo
		Target = argumentos [i] || {};
		I ++;
	}

	// Maneja el caso cuando el objetivo es una cadena o algo (posible en copia profunda)
	If (typeof target! == "objeto" &&! JQuery.isFunction (target)) {
		Target = {};
	}

	// Extiende jQuery si solo se pasa un argumento
	Si (i === longitud) {
		Target = this;
		yo--;
	}

	Para (i <longitud; i ++) {

		// Sólo trata con valores no nulos / no definidos
		If ((options = arguments [i])! = Null) {

			// Extiende el objeto base
			Para (nombre en opciones) {
				Src = target [name];
				Copy = opciones [nombre];

				// Evita el bucle sin fin
				If (target === copy) {
					continuar;
				}

				// Recurriendo si estamos fusionando objetos o matrices sencillas
				If (deep && copy && (jQuery.isPlainObject (copy) ||
					(CopyIsArray = jQuery.isArray (copia)))) {

					If (copyIsArray) {
						CopyIsArray = false;
						Clone = src && jQuery.isArray (src)? Src: [];

					} Else {
						Clone = src && jQuery.isPlainObject (src)? Src: {};
					}

					// Nunca mover objetos originales, clonarlos
					Target [nombre] = jQuery.extend (profundidad, clon, copia);

				// No traiga valores indefinidos
				} Else if (copy! == undefined) {
					Target [nombre] = copia;
				}
			}
		}
	}

	// Devuelve el objeto modificado
	Objetivo de retorno;
};

JQuery.extend ({

	// Único para cada copia de jQuery en la página
	Expando: "jQuery" + (versión + Math.random ()) .replace (/ \ D / g, ""),

	// Suponga que jQuery está listo sin el módulo listo
	IsReady: cierto,

	Error: function (msg) {
		Throw nuevo Error (msg);
	},

	Noop: function () {},

	// Consulte test / unit / core.js para obtener detalles sobre isFunction.
	// Desde la versión 1.3, los métodos y funciones DOM como alertas
	// no son compatibles. Devuelven false en IE (# 2968).
	IsFunction: function (obj) {
		Return jQuery.type (obj) === "función";
	},

	IsArray: Array.isArray || Función (obj) {
		Return jQuery.type (obj) === "matriz";
	},

	IsWindow: function (obj) {
		/ * Jshint eqeqeq: false * /
		Return obj! = Null && obj == obj.window;
	},

	IsNumeric: function (obj) {

		// parseFloat NaNs numeric-cast positivos falsos (null | true | false | "")
		// ... pero interpreta erróneamente las cadenas de números principales, especialmente los literales hexadecimales ("0x ...")
		// subtracción fuerza infinitos a NaN
		// Añadiendo 1 corrige la pérdida de precisión de parseFloat (# 15100)
		Var realStringObj = obj && obj.toString ();
		Return! JQuery.isArray (obj) && (realStringObj - parseFloat (realStringObj) + 1)> = 0;
	},

	IsEmptyObject: function (obj) {
		Nombre var;
		Para (nombre en obj) {
			falso retorno;
		}
		Devuelve verdadero;
	},

	IsPlainObject: function (obj) {
		Var key;

		// Debe ser un objeto.
		// Debido a IE, también tenemos que comprobar la presencia de la propiedad constructor.
		// Asegúrese de que los nodos DOM y los objetos de ventana no pasan, así
		If (! Obj || jQuery.type (obj)! == "objeto" || obj.nodeType || jQuery.isWindow (obj)) {
			falso retorno;
		}

		tratar {

			// La propiedad del constructor no propia debe ser Object
			If (obj.constructor &&
				! HasOwn.call (obj, "constructor") &&
				! HasOwn.call (obj.constructor.prototype, "isPrototypeOf")) {
				falso retorno;
			}
		} Catch (e) {

			// IE8,9 Lanzará excepciones en determinados objetos host # 9897
			falso retorno;
		}

		// Soporte: IE <9
		// Administrar iteración sobre propiedades heredadas antes de propiedades propias.
		If (! Support.ownFirst) {
			Para (clave en obj) {
				Return hasOwn.call (obj, clave);
			}
		}

		// Propiedades propias se enumeran en primer lugar, por lo que para acelerar,
		// si último es propio, entonces todas las propiedades son propias.
		Para (clave en obj) {}

		Tecla de retorno === undefined || HasOwn.call (obj, clave);
	},

	Tipo: function (obj) {
		If (obj == null) {
			Return obj + "";
		}
		Return typeof obj === "objeto" || Typeof obj === "función"?
			Class2type [toString.call (obj)] || "Objeto":
			Typeof obj;
	},

	// Soluciones alternativas basadas en los hallazgos de Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	GlobalEval: función (datos) {
		If (data && jQuery.trim (data)) {

			// Utilizamos execScript en Internet Explorer
			// Utilizamos una función anónima para que el contexto sea ventana
			// en lugar de jQuery en Firefox
			(Window.execScript || function (data) {
				Window ["eval"] .call (ventana, datos); // jscs: ignore requireDotNotation
			}) (Datos);
		}
	},

	// Convierte laschadas a camelCase; Utilizado por los módulos css y datos
	// Microsoft se olvidó de joroba su prefijo de proveedor (# 9572)
	CamelCase: function (string) {
		Return string.replace (rmsPrefix, "ms-") .replace (rdashAlpha, fcamelCase);
	},

	NodeName: function (elem, name) {
		Return elem.nodeName && elem.nodeName.toLowerCase () === name.toLowerCase ();
	},

	Each: function (obj, callback) {
		Longitud var, i = 0;

		If (isArrayLike (obj)) {
			Length = obj.length;
			Para (i <longitud; i ++) {
				If (callback.call (obj [i], i, obj [i]) === false) {
					descanso;
				}
			}
		} Else {
			Para (i en obj) {
				If (callback.call (obj [i], i, obj [i]) === false) {
					descanso;
				}
			}
		}

		Return obj;
	},

	// Soporte: Android <4.1, IE <9
	Recortar: función (texto) {
		Return text == null?
			"":
			(Text + "") .replace (rtrim, "");
	},

	// los resultados son sólo para uso interno
	MakeArray: function (arr, results) {
		Var ret = resultados || [];

		If (arr! = Null) {
			If (isArrayLike (Object (arr))) {
				JQuery.merge (ret,
					Typeof arr === "cadena"?
					Arr
				);
			} Else {
				Push.call (ret, arr);
			}
		}

		Return ret;
	},

	InArray: function (elem, arr, i) {
		Len var

		Si (arr) {
			If (indexOf) {
				Return indexOf.call (arr, elem, i);
			}

			Len = arr.length;
			I = i? I <0? Math.max (0, len + i): i: 0;

			Para (i <len; i ++) {

				// Saltar acceso en matrices escasas
				If (i en arr && arr [i] === elem) {
					Return i;
				}
			}
		}

		Return -1;
	},

	Merge: function (first, second) {
		Var len = + segundo.length,
			J = 0,
			I = primera.longitud;

		Mientras que (j <len) {
			Primero [i ++] = segundo [j ++];
		}

		// Soporte: IE <9
		// Colocación de una solución de .length a NaN en objetos de otro modo arrays (por ejemplo, NodeLists)
		If (len! == len) {
			While (second [j]! == undefined) {
				Primero [i ++] = segundo [j ++];
			}
		}

		Primera longitud = i;

		Volver primero;
	},

	Grep: function (elems, callback, invertido) {
		Var callbackInverse,
			Partidos = [],
			I = 0,
			Longitud = elems.length,
			CallbackExpect =! Invert;

		// Ir a través de la matriz, sólo guardar los elementos
		// que pasa la función de validación
		Para (i <longitud; i ++) {
			CallbackInverse = callback (elems [i], i);
			If (callbackInverse! == callbackExpect) {
				Matches.push (elems [i]);
			}
		}

		Devolver coincidencias;
	},

	// arg es sólo para uso interno
	Mapa: función (elems, devolución de llamada, arg) {
		Var longitud, valor,
			I = 0,
			Ret = [];

		// Ir a través de la matriz, traduciendo cada uno de los elementos a sus nuevos valores
		If (isArrayLike (elems)) {
			Length = elems.length;
			Para (i <longitud; i ++) {
				Valor = devolución de llamada (elems [i], i, arg);

				If (value! = Null) {
					Ret.push (valor);
				}
			}

		// Pasa por cada tecla del objeto,
		} Else {
			Para (i en elems) {
				Valor = devolución de llamada (elems [i], i, arg);

				If (value! = Null) {
					Ret.push (valor);
				}
			}
		}

		// Aplanar todas las matrices anidadas
		Return concat.apply ([], ret);
	},

	// Un contador GUID global para objetos
	Guía: 1,

	// Vincule una función a un contexto, aplicando parcialmente una
	// argumentos.
	Proxy: function (fn, context) {
		Var args, proxy, tmp;

		If (tipo de contexto === "cadena") {
			Tmp = fn [contexto];
			Context = fn;
			Fn = tmp;
		}

		// Comprobación rápida para determinar si el objetivo es llamable, en la especificación
		// esto lanza un TypeError, pero vamos a regresar undefined.
		If (! JQuery.isFunction (fn)) {
			Return undefined;
		}

		// Simulated bind
		Args = slice.call (argumentos, 2);
		Proxy = function () {
			Return fn.apply (context || this, args.concat (slice.call (argumentos)));
		};

		// Establece el guid de un manejador único al mismo del manejador original, por lo que se puede quitar
		Proxy.guid = fn.guid = fn.guid || JQuery.guid ++;

		Return proxy;
	},

	Ahora: function () {
		Return + (new Date ());
	},

	// jQuery.support no se utiliza en Core pero otros proyectos adjuntan su
	// propiedades a lo que necesita para existir.
	Apoyo: apoyo
});

// JSHint error en este código debido a que el símbolo no está definido en ES5.
// Definir esto global en .jshintrc crearía un peligro de usar el global
// desprotegido en otro lugar, parece más seguro desactivar JSHint para estos
// tres líneas.
/ * Jshint ignore: start * /
If (tipo de símbolo === "función") {
	JQuery.fn [Symbol.iterator] = deletedIds [Symbol.iterator];
}
/ * Jshint ignore: end * /

// Rellene el mapa class2type
JQuery.each ("Boolean Number String Función Array Fecha RegExp Objeto Error Símbolo" .split (""),
Función (i, nombre) {
	Class2type ["[objeto" + nombre + "]"] = name.toLowerCase ();
});

Function isArrayLike (obj) {

	// Soporte: iOS 8.2 (no reproducible en simulador)
	// `in` check usado para prevenir el error JIT (gh-2145)
	// hasOwn no se utiliza aquí debido a falsos negativos
	// con respecto a la longitud de Nodelist en IE
	Var length = !! obj && "length" en obj && obj.length,
		Type = jQuery.type (obj);

	If (type === "function" || jQuery.isWindow (obj)) {
		falso retorno;
	}

	Tipo de retorno === "array" || Length === 0 ||
		Typeof longitud === "número" && longitud> 0 && (longitud - 1) en obj;
}
Var Sizzle =
/ *!
 * Sizzle CSS Selector Engine v2.2.1
 * Http://sizzlejs.com/
 *
 * Copyright jQuery Foundation y otros colaboradores
 * Liberado bajo la licencia del MIT
 * Http://jquery.org/license
 *
 * Fecha: 2015-10-17
 * /
(Función (ventana) {

Var i,
	apoyo,
	Expr,
	GetText,
	IsXML,
	Tokenize
	compilar,
	seleccionar,
	OutermostContext,
	SortInput,
	HasDuplicate,

	// Documentos locales vars
	SetDocument,
	documento,
	DocElem,
	DocumentIsHTML,
	RbuggyQSA,
	RbuggyMatches,
	partidos,
	Contiene,

	// Datos específicos de la instancia
	Expando = "chisporroteo" + 1 * nueva fecha (),
	PreferredDoc = window.document,
	Dirruns = 0,
	Hecho = 0,
	ClassCache = createCache (),
	TokenCache = createCache (),
	CompilerCache = createCache (),
	SortOrder = función (a, b) {
		Si (a === b) {
			HasDuplicate = true;
		}
		Return 0;
	},

	// Constantes de uso general
	MAX_NEGATIVE = 1 << 31,

	// Métodos de instancia
	HasOwn = ({}). HasOwnProperty,
	Arr = [],
	Pop = arr.pop,
	Push_native = arr.push,
	Push = arr.push,
	Slice = arr.slice,
	// Utiliza un indexOf simplificado, ya que es más rápido que nativo
	// http://jsperf.com/thor-indexof-vs-for/5
	IndexOf = function (list, elem) {
		Var i = 0,
			Len = list.length;
		Para (i <len; i ++) {
			If (list [i] === elem) {
				Return i;
			}
		}
		Return -1;
	},

	Booleanos = "seleccionado | asincrónico | autofoco | autoplay | controles | aplazar | deshabilitado | oculto | ismap | bucle | múltiple | abierto | sólo lectura | requerido | escopado",

	// Expresiones regulares

	// http://www.w3.org/TR/css3-selectors/#whitespace
	Whitespace = "[\\ x20 \\ t \\ r \\ n \\ f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	Identificador = "(?: \\\\. | [\\ w-] | [^ \\ x00 - \\ xa0]) +",

	// Selectores de atributos: http://www.w3.org/TR/selectors/#attribute-selectors
	Atributos = "\\ [" + espacio en blanco + "* (" + identificador + ") (?:" + espacio en blanco +
		// Operador (captura 2)
		"* ([* ^ $ |! ~)? =)" + Espacio en blanco +
		// "Los valores de atributo deben ser identificadores CSS [captura 5] o cadenas [capturar 3 o capturar 4]"
		Unesdoc.unesco.org unesdoc.unesco.org ) *) \ "| (" + Identificador + ")))) + espacios en blanco +
		Unesdoc.unesco.org unesdoc.unesco.org

	Pseudos = ":(" + identifier + ") (?: \\ ((" +
		// Para reducir el número de selectores que necesitan tokenize en el preFiltro, prefieren argumentos:
		// 1. citado (captura 3, captura 4 o captura 5)
		Unesdoc.unesco.org unesdoc.unesco.org \ ") +
		// 2. simple (captura 6)
		Atributos + ") *) () +
		// 3. cualquier otra cosa (captura 2)
		". *" +
		Unesdoc.unesco.org unesdoc.unesco.org

	// Espacio en blanco que arrastra y no se escapa, capturando algunos caracteres no blancos que preceden a este último
	Rwhitespace = new RegExp (espacios en blanco + "+", "g"),
	Rtrim = new RegExp ("^" + espacio en blanco + "+ | ((?: ^ | [^ \\\\]) (?: \\\\.) *)" + Whitespace + "+ $", "g "),

	Rcomma = new RegExp ("^" + espacio en blanco + "*," + espacio en blanco + "*"),
	Rcombinators = new RegExp ("^" + espacio en blanco + "* ([> + ~] |" + whitespace + ")" + whitespace + "*"),

	RattributeQuotes = new RegExp ("=" + espacio en blanco + "* ([^ \\] '\"] *?) "+ Whitespace +" * \\] "," g "),

	Rpseudo = new RegExp (pseudos),
	Ridentifier = new RegExp ("^" + identificador + "$"),

	MatchExpr = {
		"ID": nuevo RegExp ("^ # (" + identificador + ")"),
		"CLASE": nuevo RegExp ("^ \\. (" + Identificador + ")"),
		"TAG": nuevo RegExp ("^ (" + identificador + "| [*])"),
		"ATTR": nuevo RegExp ("^" + atributos),
		"PSEUDO": nuevo RegExp ("^" + pseudos),
		"CHILD": nuevo RegExp ("^ :( sólo | primero | último | nth | nth-last) - (child | of-type) (?: \\ (" + whitespace +
			"+ (+) + (*) () () (+) +
			"* (\\ d +) |))" + whitespace + "* \\) |)", "i"),
		"Bool": nuevo RegExp ("^ (?:" + booleanos + ") $", "i"),
		// Para uso en bibliotecas que implementan .is ()
		// Utilizamos esto para la coincidencia de puntos de venta en `select`
		"NeedsContext": new RegExp ("^" + whitespace + "* [> + ~] |: (even | odd | eq | gt | lt | nth | first | last) (?: \\ ("
			Whitespace + "* ((?: - \\ d)? \\ d *)" + whitespace + "* \\) |) (? = [^ -] | $)", "i")
	},

	Rinputs = / ^ (?: entrada | seleccione | textarea | botón) $ / i,
	Rheader = / ^ h \ d $ / i,

	Rnative = / ^ [^ {] + \ {\ s * \ [native \ w /,

	// Identificador fácilmente identificable o identificable o selectores TAG o CLASS
	RquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	Rsibling = / [+ ~] /,
	Rescape = / '| \\ / g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-caracteres
	runescape = new RegExp ( "\\\\ ([\\ da-f] {1,6}" + espacios en blanco + "|? (" + espacios en blanco + ") |.)", "ig"),
	Funescape = function (_, escape, escape de espacio) {
		Var alto = "0x" + escape - 0x10000;
		// NaN significa no-codepoint
		// Soporte: Firefox <24
		// Solución alternativa interpretación numérica errónea de + "0x"
		Volver alto == alta || EscapedWhitespace?
			escapado :
			Alto <0?
				// BMP codepoint
				String.fromCharCode (alto + 0x10000):
				// Codepoint de plano suplementario (par sustituto)
				String.fromCharCode (alto >> 10 | 0xD800, alto y 0x3FF | 0xDC00);
	},

	// Utilizado para iframes
	// Ver setDocument ()
	// Quitar el wrapper de función hace que un "permiso denegado"
	// error en IE
	UnloadHandler = function () {
		SetDocument ();
	};

// Optimizar para push.apply (_, NodeList)
tratar {
	Empujar aplicar
		(Arr = slice.call (preferredDoc.childNodes)),
		PreferredDoc.childNodes
	);
	// Soporte: Android <4.0
	// Detecta silenciosamente fallando push.apply
	Arr [preferredDoc.childNodes.length] .nodeType;
} Catch (e) {
	Push = {apply: arr.length?

		// Aproveche el segmento si es posible
		Función (target, els) {
			Push_native.apply (target, slice.call (els));
		}:

		// Soporte: IE <9
		// De lo contrario, agregue directamente
		Función (target, els) {
			Var j = target.length,
				I = 0;
			// No se puede confiar en NodeList.length
			Mientras que ((target [j ++] = els [i ++])) {}
			Target.length = j - 1;
		}
	};
}

Función Sizzle (selector, contexto, resultados, semilla) {
	Var m, i, elem, nid, nidselect, fósforo, grupos, newSelector,
		NewContext = contexto && context.ownerDocument,

		// nodeType por defecto a 9, ya que el contexto predeterminado es documento
		NodeType = contexto? Context.nodeType: 9;

	Resultados = resultados || [];

	// Volver temprano de las llamadas con selector o contexto no válido
	If (typeof selector! == "string" ||! Selector ||
		NodeType! == 1 && nodeType! == 9 && nodeType! == 11) {

		Resultados de retorno;
	}

	// Intenta atacar operaciones de búsqueda (en oposición a filtros) en documentos HTML
	Si la semilla

		If ((context? Context.ownerDocument || context: preferredDoc)! == document) {
			SetDocument (contexto);
		}
		Context = context || documento;

		If (documentIsHTML) {

			// Si el selector es suficientemente simple, intente usar un método DOM "get * By *"
			// (excepto el contexto DocumentFragment, donde los métodos no existen)
			If (nodeType! == 11 && (match = rquickExpr.exec (selector))) {

				// Selector ID
				Si ((m = coincidencia [1])) {

					// Contexto del documento
					If (nodeType === 9) {
						If ((elem = context.getElementById (m))) {

							// Soporte: IE, Opera, Webkit
							// TODO: identificar versiones
							// getElementById puede combinar elementos por nombre en lugar de ID
							If (elem.id === m) {
								Results.push (elem);
								Resultados de retorno;
							}
						} Else {
							Resultados de retorno;
						}

					// Contexto del elemento
					} Else {

						// Soporte: IE, Opera, Webkit
						// TODO: identificar versiones
						// getElementById puede combinar elementos por nombre en lugar de ID
						If (newContext && (elem = newContext.getElementById (m)) &&
							Contiene (contexto, elem) &&
							Elem.id === m) {

							Results.push (elem);
							Resultados de retorno;
						}
					}

				// Selector de tipos
				} Else if (coincidir con [2]) {
					Push.apply (results, context.getElementsByTagName (selector));
					Resultados de retorno;

				// Selector de clases
				} Else if ((m = match [3]) && support.getElementsByClassName &&
					Context.getElementsByClassName) {

					Push.apply (results, context.getElementsByClassName (m));
					Resultados de retorno;
				}
			}

			// Aprovechamiento de querySelectorAll
			If (support.qsa &&
				! CompilerCache [selector + ""] &&
				(! RbuggyQSA ||! RbuggyQSA.test (selector))) {

				If (nodeType! == 1) {
					NewContext = contexto;
					NewSelector = selector;

				// qSA mira fuera del contexto del elemento, que no es lo que queremos
				// Gracias a Andrew Dupont por esta técnica de solución
				// Soporte: IE <= 8
				// Excluir elementos del objeto
				} Else if (context.nodeName.toLowerCase ()! == "object") {

					// Captura el ID del contexto, configurándolo primero si es necesario
					If ((nid = context.getAttribute ("id"))) {
						Nid = nid.replace (rescape, "\\ $ &");
					} Else {
						Context.setAttribute ("id", (nid = expando));
					}

					// Prefijo de cada selector en la lista
					Groups = tokenize (selector);
					I = groups.length;
					Nidselect = ridentifier.test (nid)? "#" + Nid: "[id = '" + nid + "']";
					mientras yo-- ) {
						Grupos [i] = nidselect + "" + toSelector (groups [i]);
					}
					NewSelector = groups.join (",");

					// Ampliar el contexto de los selectores hermanos
					NewContext = rsibling.test (selector) && testContext (context.parentNode) ||
						contexto;
				}

				If (newSelector) {
					tratar {
						Push.apply (resultados,
							NewContext.querySelectorAll (newSelector)
						);
						Resultados de retorno;
					} Catch (qsaError) {
					} finalmente {
						If (nid === expando) {
							Context.removeAttribute ("id");
						}
					}
				}
			}
		}
	}

	// Todos los otros
	Return select (selector.replace (rtrim, "$ 1"), contexto, resultados, semilla);
}

Todos los derechos reservados
 * Crear cachés clave-valor de tamaño limitado
 * @returns {function (string, object)} Devuelve los datos Object después de almacenarlos en sí mismo con
 * Nombre de propiedad la cadena (espacio-sufijo) y (si la caché es mayor que Expr.cacheLength)
 * Borrar la entrada más antigua
 * /
Function createCache () {
	Var keys = [];

	Función de caché (clave, valor) {
		// Utilice (clave + "") para evitar la colisión con propiedades de prototipo nativas (consulte la Edición # 157)
		If (keys.push (key + "")> Expr.cacheLength) {
			// Sólo guarda las entradas más recientes
			Eliminar caché [keys.shift ()];
		}
		Return (caché [clave + ""] = valor);
	}
	Return cache;
}

Todos los derechos reservados
 * Marcar una función para uso especial por Sizzle
 * @param {Función} fn La función para marcar
 * /
Función markFunction (fn) {
	Fn [expando] = true;
	Return fn;
}

Todos los derechos reservados
 * Prueba de soporte usando un elemento
 * @param {Función} fn Pasó la div creada y espera un resultado booleano
 * /
Función aserción (fn) {
	Var div = document.createElement ("div");

	tratar {
		Regreso !! fn (div);
	} Catch (e) {
		falso retorno;
	} finalmente {
		// Eliminar de sus padres de forma predeterminada
		If (div.parentNode) {
			Div.parentNode.removeChild (div);
		}
		// libera memoria en IE
		Div = null;
	}
}

Todos los derechos reservados
 * Agrega el mismo controlador para todos los attrs especificados
 * @param {String} attrs Lista de atributos separados por tubería
 * @param {Function} handler El método que se aplicará
 * /
Función addHandle (attrs, handler) {
	Var arr = attrs.split ("|"),
		I = arr.length;

	mientras yo-- ) {
		Expr.attrHandle [arr [i]] = manejador;
	}
}

Todos los derechos reservados
 * Comprueba la orden del documento de dos hermanos
 * @param {Element} a
 * @param {Elemento} b
 * @returns {Number} Devuelve menos de 0 si a precede b, mayor que 0 si a sigue b
 * /
Función siblingCheck (a, b) {
	Var cur = b && a,
		Diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			(~ B.sourceIndex || MAX_NEGATIVE) -
			(~ A.sourceIndex || MAX_NEGATIVE);

	// Utilizar IE sourceIndex si está disponible en ambos nodos
	If (diff) {
		Return diff;
	}

	// Compruebe si b sigue una
	Si (cur) {
		Mientras que ((cur = cur.nextSibling)) {
			Si (cur === b) {
				Return -1;
			}
		}
	}

	Devolver un 1: -1;
}

Todos los derechos reservados
 * Devuelve una función para usar en pseudos para tipos de entrada
 * @param {String} tipo
 * /
Function createInputPseudo (tipo) {
	Función de retorno (elem) {
		Var name = elem.nodeName.toLowerCase ();
		Return name === "input" && elem.type === tipo;
	};
}

Todos los derechos reservados
 * Devuelve una función para usar en pseudos para los botones
 * @param {String} tipo
 * /
Función createButtonPseudo (type) {
	Función de retorno (elem) {
		Var name = elem.nodeName.toLowerCase ();
		Return (nombre === "entrada" || nombre === "botón") && elem.type === tipo;
	};
}

Todos los derechos reservados
 * Devuelve una función para usar en pseudos para posicionales
 * @param {Función} fn
 * /
Function createPositionalPseudo (fn) {
	Return markFunction (función (argumento) {
		Argumento = + argumento;
		Return markFunction (función (semilla, coincidencias) {
			Var j
				MatchIndexes = fn ([], seed.length, argumento),
				I = matchIndexes.length;

			// Encuentra elementos encontrados en los índices especificados
			mientras yo-- ) {
				If (seed [(j = matchIndexes [i])]) {
					Semilla [j] =! (Coincide con [j] = semilla [j]);
				}
			}
		});
	});
}

Todos los derechos reservados
 * Comprueba un nodo de validez como un contexto Sizzle
 * @param {Element | Object =} contexto
 * @returns {Elemento | Objeto | Booleano} El nodo de entrada si es aceptable, de lo contrario un valor false
 * /
Función testContext (context) {
	Return context && typeof context.getElementsByTagName! == "undefined" && contexto;
}

// Exponer vars de soporte para mayor comodidad
Support = Sizzle.support = {};

Todos los derechos reservados
 * Detecta nodos XML
 * @param {Element | Object} elem Un elemento o un documento
 * @returns {Boolean} True iff elem es un nodo XML no HTML
 * /
IsXML = Sizzle.isXML = función (elem) {
	// documentElement se verifica para casos en los que aún no existe
	// (como cargar iframes en IE - # 4833)
	Var documentElement = elem && (elem.ownerDocument || elem) .documentElement;
	Return documentElement? DocumentElement.nodeName! == "HTML": false;
};

Todos los derechos reservados
 * Establece las variables relacionadas con el documento una vez basadas en el documento actual
 * @param {Element | Object} [doc] Objeto de elemento o documento a utilizar para configurar el documento
 * @returns {Objeto} Devuelve el documento actual
 * /
SetDocument = Sizzle.setDocument = function (nodo) {
	Var hasCompare, parent,
		Doc = nodo? Node.ownerDocument || Nodo: preferredDoc;

	// Volver temprano si el documento no es válido o ya está seleccionado
	If (doc === document || doc.nodeType! == 9 ||! Doc.documentElement) {
		Documento de devolución;
	}

	// Actualizar variables globales
	Document = doc;
	DocElem = document.documentElement;
	DocumentIsHTML =! IsXML (documento);

	// Soporte: IE 9-11, Edge
	// Acceso a documentos iframe después de descargar tiros errores "permission denied" (jQuery # 13936)
	If ((parent = document.defaultView) && parent.top! == parent) {
		// Soporte: IE 11
		If (parent.addEventListener) {
			Parent.addEventListener ("unload", unloadHandler, false);

		// Soporte: IE 9 - 10 solamente
		} Else if (parent.attachEvent) {
			Parent.attachEvent ("onunload", unloadHandler);
		}
	}

	/ * Atributos
	-------------------------------------------------- Unesdoc.unesco.org unesdoc.unesco.org

	// Soporte: IE <8
	// Verifica que getAttribute realmente devuelve atributos y no propiedades
	// (excepto los booleanos de IE8)
	Support.attributes = assert (función (div) {
		Div.className = "i";
		Return! Div.getAttribute ("className");
	});

	/ * GetElement (s) By *
	-------------------------------------------------- Unesdoc.unesco.org unesdoc.unesco.org

	// Comprueba si getElementsByTagName ("*") devuelve sólo elementos
	Support.getElementsByTagName = assert (function (div) {
		Div.appendChild (document.createComment (""));
		Return! Div.getElementsByTagName ("*"). Longitud;
	});

	// Soporte: IE <9
	Support.getElementsByClassName = rnative.test (document.getElementsByClassName);

	// Soporte: IE <10
	// Comprueba si getElementById devuelve elementos por nombre
	// Los métodos getElementById quebrados no capturan nombres programados,
	// así que usa una rotonda getElementsByName prueba
	Support.getById = assert (función (div) {
		DocElem.appendChild (div) .id = expando;
		Return! Document.getElementsByName || ! Document.getElementsByName (expando) .length;
	});

	// ID find y filter
	If (support.getById) {
		Expr.find ["ID"] = función (id, contexto) {
			If (typeof context.getElementById! == "undefined" && documentIsHTML) {
				Var m = context.getElementById (id);
				Devolver m? [M]: [];
			}
		};
		Expr.filter ["ID"] = función (id) {
			Var attrId = id.replace (runescape, funescape);
			Función de retorno (elem) {
				Return elem.getAttribute ("id") === attrId;
			};
		};
	} Else {
		// Soporte: IE6 / 7
		// getElementById no es confiable como un acceso directo de búsqueda
		Eliminar Expr.find ["ID"];

		Expr.filter ["ID"] = función (id) {
			Var attrId = id.replace (runescape, funescape);
			Función de retorno (elem) {
				Var node = typeof elem.getAttributeNode! == "undefined" &&
					Elem.getAttributeNode ("id");
				Return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find ["TAG"] = support.getElementsByTagName?
		Function (tag, context) {
			If (typeof context.getElementsByTagName! == "undefined") {
				Return context.getElementsByTagName (tag);

			// Los nodos DocumentFragment no tienen gEBTN
			} Else if (support.qsa) {
				Return context.querySelectorAll (tag);
			}
		}:

		Function (tag, context) {
			Var elem
				Tmp = [],
				I = 0,
				// Por coincidencia feliz, un gEBTN (roto) aparece en nodos de DocumentFragment también
				Results = context.getElementsByTagName (tag);

			// Filtrar posibles comentarios
			Si (etiqueta === "*") {
				Mientras que ((elem = results [i ++])) {
					If (elem.nodeType === 1) {
						Tmp.push (elem);
					}
				}

				Return tmp;
			}
			Resultados de retorno;
		};

	// Clase
	Expr.find ["CLASS"] = support.getElementsByClassName && function (className, context) {
		If (typeof context.getElementsByClassName! == "undefined" && documentIsHTML) {
			Return context.getElementsByClassName (className);
		}
	};

	/ * QSA / matchesSelector
	-------------------------------------------------- Unesdoc.unesco.org unesdoc.unesco.org

	// QSA y coincidenciasSelector support

	// matchesSelector (: active) informa de false cuando es true (IE9 / Opera 11.5)
	RbuggyMatches = [];

	// qSa (: focus) informa falsa cuando es verdadera (Chrome 21)
	// Lo permitimos debido a un error en IE8 / 9 que arroja un error
	// cuando se accede a `document.activeElement` en un iframe
	// Por lo tanto, permitimos: enfoque para pasar a través de QSA todo el tiempo para evitar el error de IE
	// Ver http://bugs.jquery.com/ticket/13378
	RbuggyQSA = [];

	If ((support.qsa = rnative.test (document.querySelectorAll))) {
		// Crear QSE regex
		// Regex adoptada por Diego Perini
		Afirmar (función (div) {
			// Select está configurado como cadena vacía a propósito
			// Esto es para probar el tratamiento de IE no explícitamente
			// establecer un atributo de contenido booleano,
			// ya que su presencia debe ser suficiente
			// http://bugs.jquery.com/ticket/12359
			DocElem.appendChild (div) .innerHTML = "<a id='" + expando + "'> </a>" +
				"<Select id = '" + expando + "- \ r \\' msallowcapture = ''>" +
				"<Option selected = ''> </ option> </ select>";

			// Soporte: IE8, Opera 11-12.16
			// No se debe seleccionar nada cuando se siguen cadenas vacías ^ = or $ = or * =
			// El atributo test debe ser desconocido en Opera pero "seguro" para WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			If (div.querySelect oAll ("[msallowcapture ^ = '']"). Length) {
				RbuggyQSA.push ("[* ^ $] =" + whitespace + "* (?: '' | \" \ ")");
			}

			// Soporte: IE8
			// Los atributos booleanos y el "valor" no se tratan correctamente
			If (! Div.querySelectorAll ("[selected]"). Length) {
				RbuggyQSA.push ("\\ [" + whitespace + "* (?: value |" + booleans + ")");
			}

			// Soporte: Chrome <29, Android <4.4, Safari <7.0+, iOS <7.0+, PhantomJS <1.9.8+
			If (! Div.querySelectorAll ("[id ~ =" + expando + "-]") .length) {
				RbuggyQSA.push ("~ =");
			}

			// Webkit / Opera -: marcado debe devolver elementos de la opción seleccionada
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 lanza error aquí y no verá pruebas posteriores
			If (! Div.querySelectorAll (": checked"). Length) {
				RbuggyQSA.push (": checked");
			}

			// Soporte: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// En la página 'selector # id sibing-combinator selector` falla
			If (! Div.querySelectorAll ("a #" + expando + "+ *") .length) {
				RbuggyQSA.push (". #. + [+ ~]");
			}
		});

		Afirmar (función (div) {
			// Soporte: Windows 8 Native Apps
			// Los atributos de tipo y nombre están restringidos durante la asignación .innerHTML
			Var input = document.createElement ("input");
			Input.setAttribute ("type", "hidden");
			Div.appendChild (entrada) .setAttribute ("nombre", "D");

			// Soporte: IE8
			// Aplicar la sensibilidad a mayúsculas y minúsculas del atributo name
			If (div.querySelectorAll ("[name = d]"). Longitud) {
				RbuggyQSA.push ("nombre" + espacio en blanco + "* [* ^ $ |? ~]? =");
			}

			// FF 3.5 -: enabled /: disabled y elementos ocultos (los elementos ocultos todavía están habilitados)
			// IE8 lanza error aquí y no verá pruebas posteriores
			If (! Div.querySelectorAll (": enabled"). Length) {
				RbuggyQSA.push (": enabled", ": disabled");
			}

			// Opera 10-11 no lanza en post-coma pseudos inválidos
			Div.querySelectorAll ("* ,: x");
			RbuggyQSA.push (",. *:");
		});
	}

	If ((support.matchesSelector = rnative.test ((matches = docElem.matches ||
		DocElem.webkitMatchesSelector ||
		DocElem.mozMatchesSelector ||
		DocElem.oMatchesSelector ||
		DocElem.msMatchesSelector)))) {

		Afirmar (función (div) {
			// Verifica si es posible hacer coincidenciasSelector
			// en un nodo desconectado (IE 9)
			Support.disconnectedMatch = matches.call (div, "div");

			// Esto debería fallar con una excepción
			// Gecko no produce error, devuelve false en su lugar
			Matches.call (div, "[s! = '']: X");
			RbuggyMatches.push ("! =", Pseudos);
		});
	}

	RbuggyQSA = rbuggyQSA.length && new RegExp (rbuggyQSA.join ("|"));
	RbuggyMatches = rbuggyMatches.length && new RegExp (rbuggyMatches.join ("|"));

	/ * Contiene
	-------------------------------------------------- Unesdoc.unesco.org unesdoc.unesco.org
	HasCompare = rnative.test (docElem.compareDocumentPosition);

	// El elemento contiene otro
	// Propiamente autoexclusiva
	// Como en, un elemento no se contiene
	Contains = hasCompare || Rnative.test (docElem.contains)?
		Función (a, b) {
			Var adown = a.nodeType === 9? A.documentElement: a,
				Bup = b && b.parentNode;
			Return a === bup || !! (bup && bup.nodeType === 1 && (
				Adown.contains?
					Adown.contains (bup):
					A.compareDocumentPosition && a.compareDocumentPosition (bup) & 16
			));
		}:
		Función (a, b) {
			Si (b) {
				Mientras que ((b = b.parentNode)) {
					Si (b === a) {
						Devuelve verdadero;
					}
				}
			}
			falso retorno;
		};

	/ * Clasificación
	-------------------------------------------------- Unesdoc.unesco.org unesdoc.unesco.org

	// Clasificación de orden de documentos
	SortOrder = hasCompare?
	Función (a, b) {

		// Marcar para eliminación duplicada
		Si (a === b) {
			HasDuplicate = true;
			Return 0;
		}

		// Clasificar la existencia del método si sólo una entrada tiene compareDocumentPosition
		Var compare =! A.compareDocumentPosition -! B.compareDocumentPosition;
		Si compara
			Return compare;
		}

		// Calcular posición si ambas entradas pertenecen al mismo documento
		Compare = (a.ownerDocument || a) === (b.ownerDocument || b)?
			A.compareDocumentPosition (b):

			// De lo contrario, sabemos que están desconectados
			1;

		// Nodos desconectados
		If (compare & 1 ||
			(! Support.sortDetached && b.compareDocumentPosition (a) === comparar)) {

			// Elige el primer elemento que está relacionado con nuestro documento preferido
			If (a === document || a.ownerDocument === preferredDoc && contiene (preferredDoc, a)) {
				Return -1;
			}
			If (b === document || b.ownerDocument === preferredDoc && contiene (preferredDoc, b)) {
				Return 1;
			}

			// Mantener el orden original
			Return sortInput?
				(IndexOf (sortInput, a) - indexOf (sortInput, b)):
				0;
		}

		Return comparar & 4? -1: 1;
	}:
	Función (a, b) {
		// Salir temprano si los nodos son idénticos
		Si (a === b) {
			HasDuplicate = true;
			Return 0;
		}

		Var cur
			I = 0,
			Aup = a.parentNode,
			Bup = b.parentNode,
			Ap = [a],
			Bp = [b];

		// Los nodos sin padres son documentos o desconectados
		If (! Aup ||! Bup) {
			Devolver un documento ===? -1:
				B === documento? 1
				Aup -1:
				Bup 1
				SortInput?
				(IndexOf (sortInput, a) - indexOf (sortInput, b)):
				0;

		// Si los nodos son hermanos, podemos hacer una verificación rápida
		} Else if (aup === bup) {
			Return siblingCheck (a, b);
		}

		// De lo contrario necesitamos listas completas de sus ancestros para comparación
		Cur = a;
		While ((cur = cur.parentNode)) {
			Ap.unshift (cur);
		}
		Cur = b;
		While ((cur = cur.parentNode)) {
			Bp.unshift (cur);
		}

		// Camina por el árbol buscando una discrepancia
		Mientras que (ap [i] === bp [i]) {
			I ++;
		}

		Regreso yo
			// Hacer una comprobación de hermanos si los nodos tienen un antepasado común
			SiblingCheck (ap [i], bp [i]):

			// De lo contrario, los nodos de nuestro documento clasifican primero
			Ap [i] === preferredDoc? -1:
			Bp [i] === preferredDoc? 1
			0;
	};

	Documento de devolución;
};

Sizzle.matches = function (expr, elements) {
	Return Sizzle (expr, nulo, nulo, elementos);
};

Sizzle.matchesSelector = function (elem, expr) {
	// Establecer vars de documentos si es necesario
	If ((elem.ownerDocument || elem)! == document) {
		SetDocument (elem);
	}

	// Asegúrese de que los selectores de atributos están citados
	Expr = expr.replace (rattributeQuotes, "= '$ 1']");

	If (support.matchesSelector && documentIsHTML &&
		! CompilerCache [expr + ""] &&
		(! RbuggyMatches ||! RbuggyMatches.test (expr)) &&
		(! RbuggyQSA ||! RbuggyQSA.test (expr))) {

		tratar {
			Var ret = matches.call (elem, expr);

			// MatchSelector de IE 9 devuelve false en nodos desconectados
			If (ret || support.disconnectedMatch ||
					// Además, se dice que los nodos desconectados están en un documento
					// fragmento en IE 9
					Elem.document && elem.document.nodeType! == 11) {
				Return ret;
			}
		Captura {sustantivo}
	}

	Return Sizzle (expr, documento, nulo, [elem]) .length> 0;
};

Sizzle.contains = function (context, elem) {
	// Establecer vars de documentos si es necesario
	If ((context.ownerDocument || context)! == document) {
		SetDocument (contexto);
	}
	Return contains (context, elem);
};

Sizzle.attr = function (elem, name) {
	// Establecer vars de documentos si es necesario
	If ((elem.ownerDocument || elem)! == document) {
		SetDocument (elem);
	}

	Var fn = Expr.attrHandle [name.toLowerCase ()],
		// No se deje engañar por las propiedades Object.prototype (jQuery # 13807)
		Val = fn && hasOwn.call (Expr.attrHandle, name.toLowerCase ())?
			Fn (elem, nombre,! DocumentIsHTML):
			Indefinido

	Return val! == undefined?
		Val
		Support.attributes || ! DocumentIsHTML?
			Elem.getAttribute (nombre):
			(Val = elem.getAttributeNode (nombre)) && val.specified?
				Val.value:
				nulo;
};

Sizzle.error = function (msg) {
	Throw new Error ("Error de sintaxis, expresión no reconocida:" + msg);
};

Todos los derechos reservados
 * Documento de clasificación y eliminación de duplicados
 Resultados de @param {ArrayLike}
 * /
Sizzle.uniqueSort = función (resultados) {
	Var elem
		Duplicados = [],
		J = 0,
		I = 0;

	// A menos que sepamos * podemos detectar duplicados, asumir su presencia
	HasDuplicate =! Support.detectDuplicates;
	SortInput =! Support.sortStable && results.slice (0);
	Results.sort (sortOrder);

	If (hasDuplicate) {
		Mientras que ((elem = results [i ++])) {
			If (elem === results [i]) {
				J = duplicates.push (i);
			}
		}
		Mientras que (j--) {
			Results.splice (duplicates [j], 1);
		}
	}

	// Borrar entrada después de ordenar para liberar objetos
	// Ver https://github.com/jquery/sizzle/pull/225
	SortInput = null;

	Resultados de retorno;
};

Todos los derechos reservados
 * Función de utilidad para recuperar el valor de texto de una matriz de nodos DOM
 * @param {Array | Element} elem
 * /
GetText = Sizzle.getText = function (elem) {
	Nodo var,
		Ret = "",
		I = 0,
		NodeType = elem.nodeType;

	If (! NodeType) {
		// Si no nodeType, se espera que sea un array
		Mientras que ((nodo = elem [i ++])) {
			// No recorrer los nodos de comentario
			Ret + = getText (nodo);
		}
	} Else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
		// Utilizar textContent para elementos
		// innerText uso eliminado para la consistencia de nuevas líneas (jQuery # 11153)
		If (typeof elem.textContent === "cadena") {
			Return elem.textContent;
		} Else {
			// Atravesar a sus hijos
			Para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				Ret + = getText (elem);
			}
		}
	} Else if (nodeType === 3 || nodeType === 4) {
		Return elem.nodeValue;
	}
	// No incluya nodos de instrucción de comentario o procesamiento

	Return ret;
};

Expr = Sizzle.selectors = {

	// Puede ser ajustado por el usuario
	CacheLength: 50,

	CreatePseudo: markFunction,

	Partido: matchExpr,

	AttrHandle: {},

	encontrar: {},

	relativo: {
		">": {Dir: "parentNode", primero: true},
		"": {Dir: "parentNode"},
		"+": {Dir: "previousSibling", primero: true},
		"~": {Dir: "previousSibling"}
	},

	PreFiltro: {
		"ATTR": función (coincidencia) {
			Partido [1] = partido [1] .replace (runescape, funescape);

			// Mover el valor dado para que coincida con [3], ya sea cotizado o no cotizado
			Match [3] = (partido [3] || partido [4] || partido [5] || "") .replace (runescape, funescape);

			If (match [2] === "~ =") {
				Partido [3] = "" + partido [3] + "";
			}

			Return match.slice (0, 4);
		},

		"CHILD": función (coincidencia) {
			/ * Partidos de matchExpr ["CHILD"]
				1 tipo (sólo | nth | ...)
				2 qué (niño de tipo)
				3 argumento (incluso | impar | \ d * | \ d * n ([+ -] \ d +)? ...)
				4 xn-componente de xn + y argumento ([+ -]? \ D * n |)
				5 signo de xn-componente
				6 x de componente xn
				7 signo de componente y
				8 y de componente y
			* /
			Partido [1] = partido [1] .toLowerCase ();

			If (match [1] .slice (0, 3) === "nth") {
				// nth- * requiere argumento
				If (! Match [3]) {
					Sizzle.error (coincidencia [0]);
				}

				// parámetros numéricos xey para Expr.filter.CHILD
				// recuerda que false / true cast respectivamente a 0/1
				[4] = + (match [4]? Match [5] + (match [6] || 1): 2 * (coincidir [3] === "even" || match [3] === " impar" ) );
				Partido [5] = + ((partido [7] + partido [8]) || partido [3] === "impar");

			// otros tipos prohíben los argumentos
			} Else if (coincidir con [3]) {
				Sizzle.error (coincidencia [0]);
			}

			Partido de vuelta;
		},

		"PSEUDO": function (coincidencia) {
			Var exceso,
				Unquoted =! Match [6] && match [2];

			If (matchExpr ["CHILD"]. Prueba (coincidencia [0])) {
				Return null;
			}

			// Aceptar los argumentos citados como-es
			If (match [3]) {
				Partido [2] = partido [4] || Partido [5] || "";

			// Eliminar los caracteres en exceso de los argumentos no citados
			} Else if (unquoted && rpseudo.test (unquoted) &&
				// Obtener el exceso de tokenize (recursivamente)
				(Exceso = tokenize (unquoted, true)) &&
				// Avanza al siguiente paréntesis de cierre
				(Exceso = unquoted.indexOf (")", unquoted.length - exceso) - unquoted.length)) {

				// exceso es un índice negativo
				Match [0] = match [0] .slice (0, exceso);
				Partido [2] = unquoted.slice (0, exceso);
			}

			// Devuelve sólo las capturas necesarias por el método del pseudo filtro (tipo y argumento)
			Return match.slice (0, 3);
		}
	},

	Filtro: {

		"TAG": function (nodeNameSelector) {
			Var nodeName = nodeNameSelector.replace (runescape, funescape) .toLowerCase ();
			Return nodeNameSelector === "*"?
				Function () {return true; }:
				Función (elem) {
					Return elem.nodeName && elem.nodeName.toLowerCase () === nodeName;
				};
		},

		"CLASE": function (className) {
			Var pattern = classCache [className + ""];

			Patrón de retorno ||
				(Pattern = new RegExp ("(^ |" + whitespace + ")" + className + "(" + whitespace + "| $)")) &&
				ClassCache (className, function (elem) {
					Return pattern.test (typeof elem.className === "cadena" && elem.className || typeof elem.getAttribute! == "undefined" && elem.getAttribute ("class") || "");
				});
		},

		"ATTR": función (nombre, operador, cheque) {
			Función de retorno (elem) {
				Var result = Sizzle.attr (elem, nombre);

				If (result == null) {
					Operador de retorno === "! =";
				}
				If (! Operator) {
					Devuelve verdadero;
				}

				Resultado + = "";

				Return operator === "="? Resultado === verificación:
					Operador === "! ="? Resultado == check:
					Operador === "^ ="? Check && result.indexOf (check) === 0:
					Operador === "* ="? Check && result.indexOf (check)> -1:
					Operador === "$ ="? Check && result.slice (-check.length) === cheque:
					Operador === "~ ="? ("+ Resultado.replace (rwhitespace," ") +" ") .indexOf (check)> -1:
					Operador === "| ="? Resultado === cheque || Result.slice (0, check.length + 1) === check + "-":
					falso;
			};
		},

		"CHILD": función (tipo, qué, argumento, primero, último) {
			Var simple = type.slice (0, 3)! == "nth",
				Forward = type.slice (-4)! == "last",
				OfType = qué === "de-tipo";

			Return first === 1 && last === 0?

				// Atajo para: nth - * (n)
				Función (elem) {
					Return !! elem.parentNode;
				}:

				Función (elem, context, xml) {
					Var caché, uniqueCache, outerCache, nodo, nodeIndex, inicio,
						Dir = simple! == adelante? "NextSibling": "previousSibling",
						Parent = elem.parentNode,
						Name = ofType && elem.nodeName.toLowerCase (),
						UseCache =! Xml &&! OfType,
						Diff = false;

					Si (padre) {

						//: (first | last | only) - (child | of-type)
						Si es simple
							Mientras que (dir) {
								Node = elem;
								Mientras que ((nodo = nodo [dir])) {
									If (ofType?
										Node.nodeName.toLowerCase () === nombre:
										Node.nodeType === 1) {

										falso retorno;
									}
								}
								// Dirección inversa para: sólo - * (si aún no lo hemos hecho)
								Start = dir = type === "sólo" &&! Start && "nextSibling";
							}
							Devuelve verdadero;
						}

						Empezar = [adelante? Parent.firstChild: parent.lastChild];

						// non-xml: nth-child (...) almacena datos de caché en `parent`
						If (forward && useCache) {

							// Buscar `elem` desde un índice previamente almacenado en caché

							// ... de una manera amigable con gzip
							Node = parent;
							OuterCache = nodo [expando] || (Nodo [expando] = {});

							// Soporte: IE <9 solamente
							// Defender contra atributos clonados (jQuery gh-1709)
							UniqueCache = outerCache [node.uniqueID] ||
								(OuterCache [node.uniqueID] = {});

							Cache = uniqueCache [tipo] || [];
							NodeIndex = cache [0] === dirruns && cache [1];
							Diff = nodeIndex && cache [2];
							Node = nodeIndex && parent.childNodes [nodeIndex];

							While ((node ??= ++ nodeIndex && node && node [dir] ||

								// Volver a buscar `elem` desde el principio
								(Diff = nodeIndex = 0) || Start.pop ())) {

								// Cuando se encuentra, los índices de caché en `parent` y break
								If (node.nodeType === 1 && ++ diff && node === elem) {
									UniqueCache [tipo] = [dirruns, nodeIndex, diff];
									descanso;
								}
							}

						} Else {
							// Utiliza el índice de elemento previamente almacenado en caché, si está disponible
							If (useCache) {
								// ... de una manera amigable con gzip
								Node = elem;
								OuterCache = nodo [expando] || (Nodo [expando] = {});

								// Soporte: IE <9 solamente
								// Defender contra atributos clonados (jQuery gh-1709)
								UniqueCache = outerCache [node.uniqueID] ||
									(OuterCache [node.uniqueID] = {});

								Cache = uniqueCache [tipo] || [];
								NodeIndex = cache [0] === dirruns && cache [1];
								Diff = nodeIndex;
							}

							// xml: nth-child (...)
							// o: nth-last-child (...) o: nth (-last)? - of-type (...)
							If (diff === false) {
								// Usa el mismo bucle que el de arriba para buscar `elem` desde el principio
								While ((node ??= ++ nodeIndex && node && node [dir] ||
									(Diff = nodeIndex = 0) || Start.pop ())) {

									If ((ofType?
										Node.nodeName.toLowerCase () === nombre:
										Node.nodeType === 1) &&
										++ diff) {

										// Caché el índice de cada elemento encontrado
										If (useCache) {
											OuterCache = nodo [expando] || (Nodo [expando] = {});

											// Soporte: IE <9 solamente
											// Defender contra atributos clonados (jQuery gh-1709)
											UniqueCache = outerCache [node.uniqueID] ||
												(OuterCache [node.uniqueID] = {});

											UniqueCache [tipo] = [dirruns, diff];
										}

										If (nodo === elem) {
											descanso;
										}
									}
								}
							}
						}

						// Incorporar el offset, luego comprobar el tamaño del ciclo
						Diff - = last;
						Return diff === primero || (Diff% first === 0 && diff / first> = 0);
					}
				};
		},

		"PSEUDO": function (pseudo, argumento) {
			// los nombres de las pseudo-clases no distinguen entre mayúsculas y minúsculas
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar la sensibilidad por mayúsculas y minúsculas en caso de que los pseudos personalizados se agreguen con letras mayúsculas
			// Recuerda que setFilters hereda de pseudos
			Var args,
				Fn = Expr.pseudos [pseudo] || Expr.setFilters [pseudo.toLowerCase ()] ||
					Sizzle.error ("no soportado pseudo:" + pseudo);

			// El usuario puede usar createPseudo para indicar que
			// Se necesitan argumentos para crear la función de filtro
			// igual que Sizzle
			If (fn [expando]) {
				Return fn (argumento);
			}

			// Pero mantener el soporte para firmas antiguas
			If (fn.length> 1) {
				Args = [pseudo, pseudo, "", argumento];
				Return Expr.setFilters.hasOwnProperty (pseudo.toLowerCase ())?
					MarkFunction (función (semilla, coincidencias) {
						Var idx,
							Emparejado = fn (semilla, argumento),
							I = longitud igualada;
						mientras yo-- ) {
							Idx = indexOf (semilla, emparejada [i]);
							Semilla [idx] =! (Coincide con [idx] = igualada [i]);
						}
					}):
					Función (elem) {
						Return fn (elem, 0, args);
					};
			}

			Return fn;
		}
	},

	Pseudos: {
		// Pseudos potencialmente complejos
		"Not": markFunction (function (selector) {
			// Recortar el selector pasado a compilar
			// para evitar el tratamiento de arrastre y arrastre
			// espacios como combinadores
			Var input = [],
				Resultados = [],
				Matcher = compile (selector.replace (rtrim, "$ 1"));

			Devolver matcher [expando]?
				MarkFunction (función (semilla, coincidencias, contexto, xml) {
					Var elem
						Unmatched = matcher (semilla, nulo, xml, []),
						I = longitud de la semilla;

					// Hacer coincidir elementos incompatibles con `matcher`
					mientras yo-- ) {
						If ((elem = unmatched [i])) {
							Semilla [i] =! (Coincide con [i] = elem);
						}
					}
				}):
				Función (elem, context, xml) {
					Entrada [0] = elem;
					Matcher (entrada, nulo, xml, resultados);
					// No guarde el elemento (edición # 299)
					Entrada [0] = nulo;
					Return! Results.pop ();
				};
		}),

		"Tiene": markFunction (function (selector) {
			Función de retorno (elem) {
				Return Sizzle (selector, elem) .length> 0;
			};
		}),

		"Contains": markFunction (function (text) {
			Text = text.replace (runescape, funescape);
			Función de retorno (elem) {
				Return (elem.textContent || elem.innerText || getText (elem)) .indexOf (text)> -1;
			};
		}),

		// "Si un elemento está representado por un selector: lang ()
		// se basa únicamente en el valor del lenguaje del elemento
		// siendo igual al identificador C,
		// o comenzando con el identificador C inmediatamente seguido de "-".
		// La coincidencia de C con el valor del lenguaje del elemento se realiza sin mayúsculas.
		// El identificador C no tiene que ser un nombre de idioma válido. "
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"Lang": markFunction (función (lang) {
			// lang value debe ser un identificador válido
			If (! Ridentifier.test (lang || "")) {
				Sizzle.error ("idioma no soportado:" + idioma);
			}
			Lang = lang.replace (runescape, funescape) .toLowerCase ();
			Función de retorno (elem) {
				Var elemLang;
				Hacer
					If ((elemLang = documentIsHTML?
						Elem.lang:
						Elem.getAttribute ("xml: lang") || Elem.getAttribute ("lang"))) {

						ElemLang = elemLang.toLowerCase ();
						Return elemLang === lang || ElemLang.indexOf (lang + "-") === 0;
					}
				} While ((elem = elem.parentNode) && elem.nodeType === 1);
				falso retorno;
			};
		}),

		// Otros
		"Target": function (elem) {
			Var hash = window.location && window.location.hash;
			Return hash && hash.slice (1) === elem.id;
		},

		"Root": function (elem) {
			Return elem === docElem;
		},

		"Focus": function (elem) {
			Return elem === document.activeElement && (! Document.hasFocus || document.hasFocus ()) && !! (elem.type || elem.href || ~ elem.tabIndex);
		},

		// Propiedades booleanas
		"Enabled": function (elem) {
			Return elem.disabled === false;
		},

		"Disabled": function (elem) {
			Return elem.disabled === true;
		},

		"Checked": function (elem) {
			// En CSS3,: checked debe devolver tanto los elementos seleccionados como los seleccionados
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			Var nodeName = elem.nodeName.toLowerCase ();
			Return (nodeName === "input" && !! elem.checked) || (NodeName === "opción" && !! elem.selected);
		},

		"Selected": function (elem) {
			// El acceso a esta propiedad hace seleccionada por defecto
			// opciones en Safari funcionan correctamente
			If (elem.parentNode) {
				Elem.parentNode.selectedIndex;
			}

			Return elem.selected === true;
		},

		// Contenidos
		"Vacío": function (elem) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			//: empty es negado por elemento (1) o nodos de contenido (texto: 3; cdata: 4; entidad ref: 5),
			// pero no por otros (comentario: 8, instrucción de procesamiento: 7, etc.)
			// nodeType <6 funciona porque los atributos (2) no aparecen como niños
			Para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				If (elem.nodeType <6) {
					falso retorno;
				}
			}
			Devuelve verdadero;
		},

		"Padre": function (elem) {
			Return! Expr.pseudos ["empty"] (elem);
		},

		// Elemento / tipos de entrada
		"Encabezado": function (elem) {
			Return rheader.test (elem.nodeName);
		},

		"Input": function (elem) {
			Return rinputs.test (elem.nodeName);
		},

		"Botón": función (elem) {
			Var name = elem.nodeName.toLowerCase ();
			Return name === "input" && elem.type === "botón" || Nombre === "botón";
		},

		"Texto": function (elem) {
			Var attr;
			Return elem.nodeName.toLowerCase () === "input" &&
				Elem.type === "text" &&

				// Soporte: IE <8
				// Nuevos valores de atributos HTML5 (por ejemplo, "search") aparecen con elem.type === "text"
				((Attr = elem.getAttribute ("type")) == null || attr.toLowerCase () === "text");
		},

		// Posición en la colección
		"First": createPositionalPseudo (function () {
			Return [0];
		}),

		"Last": createPositionalPseudo (function (matchIndexes, length) {
			Return [longitud - 1];
		}),

		"Eq": createPositionalPseudo (function (matchIndexes, length, argumento) {
			Return [argumento <0? Argumento + longitud: argumento];
		}),

		"Even": createPositionalPseudo (function (matchIndexes, length) {
			Var i = 0;
			Para (i <longitud; i + = 2) {
				MatchIndexes.push (i);
			}
			Return matchIndexes;
		}),

		"Impar": createPositionalPseudo (function (matchIndexes, length) {
			Var i = 1;
			Para (i <longitud; i + = 2) {
				MatchIndexes.push (i);
			}
			Return matchIndexes;
		}),

		"Lt": createPositionalPseudo (function (matchIndexes, length, argumento) {
			Var i = argumento <0? Argumento + longitud: argumento;
			Para (; --i> = 0;) {
				MatchIndexes.push (i);
			}
			Return matchIndexes;
		}),

		"Gt": createPositionalPseudo (function (matchIndexes, length, argumento) {
			Var i = argumento <0? Argumento + longitud: argumento;
			Para (; ++ i <longitud;) {
				MatchIndexes.push (i);
			}
			Return matchIndexes;
		})
	}
};

Expr.pseudos ["nth"] = Expr.pseudos ["eq"];

// Añadir botón / tipo de entrada pseudos
Para (i en {radio: true, checkbox: true, file: true, contraseña: true, image: true}) {
	Expr.pseudos [i] = createInputPseudo (i);
}
Para (i en {submit: true, reset: true}) {
	Expr.pseudos [i] = createButtonPseudo (i);
}

// Fácil API para crear nuevos setFilters
Función setFilters () {}
SetFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = nuevo setFilters ();

Tokenize = Sizzle.tokenize = function (selector, parseOnly) {
	Var emparejado, emparejamiento, fichas, tipo,
		SoFar, grupos, preFiltros,
		Cached = tokenCache [selector + ""];

	If (en caché) {
		Return parseOnly? 0: cached.slice (0);
	}

	SoFar = selector;
	Grupos = [];
	PreFiltros = Expr.preFilter;

	Mientras que (soFar) {

		// Coma y primera ejecución
		If (! Matched || (match = rcomma.exec (soFar))) {
			Si coinciden
				// No consumir las comillas al final como válidas
				SoFar = soFar.slice (coincidencia [0] .length) || hasta aquí;
			}
			Groups.push ((tokens = []));
		}

		Emparejado = falso;

		// Combinadores
		If ((match = rcombinators.exec (soFar))) {
			Emparejado = match.shift ();
			Tokens.push ({
				Valor: emparejado,
				// Combinar combinadores de descendientes en el espacio
				Escriba: match [0] .replace (rtrim, "")
			});
			SoFar = soFar.slice (emparejado.length);
		}

		// Filtros
		Para (escriba Expr.filter) {
			If ((match = matchExpr [tipo] .exec (soFar)) && (! PreFilters [tipo] ||
				(Match = preFilters [tipo] (coincidencia)))) {
				Emparejado = match.shift ();
				Tokens.push ({
					Valor: emparejado,
					Tipo: tipo,
					Partidos: partido
				});
				SoFar = soFar.slice (emparejado.length);
			}
		}

		Si coincide
			descanso;
		}
	}

	// Devuelve la longitud del exceso inválido
	// si solo estamos analizando
	// De lo contrario, lanzar un error o devolver fichas
	Return parseOnly?
		SoFar.length:
		hasta aquí ?
			Sizzle.error (selector):
			// Cache the tokens
			TokenCache (selector, groups) .slice (0);
};

Función toSelector (tokens) {
	Var i = 0,
		Len = tokens.length,
		Selector = "";
	Para (i <len; i ++) {
		Selector + = tokens [i] .value;
	}
	Selector de retorno;
}

Función addCombinator (combinador, combinador, base) {
	Var dir = combinator.dir,
		CheckNonElements = base && dir === "parentNode",
		DoneName = done ++;

	Return combinator.first?
		// Comprobar contra el antecesor más cercano / elemento precedente
		Función (elem, context, xml) {
			Mientras que ((elem = elem [dir])) {
				If (elem.nodeType === 1 || checkNonElements) {
					Return matcher (elem, context, xml);
				}
			}
		}:

		// Comprobar contra todos los antecedentes / elementos precedentes
		Función (elem, context, xml) {
			Var oldCache, uniqueCache, outerCache,
				NewCache = [dirruns, doneName];

			// No podemos establecer datos arbitrarios en nodos XML, por lo que no se benefician del almacenamiento en caché del combinador
			If (xml) {
				Mientras que ((elem = elem [dir])) {
					If (elem.nodeType === 1 || checkNonElements) {
						If (matcher (elem, context, xml)) {
							Devuelve verdadero;
						}
					}
				}
			} Else {
				Mientras que ((elem = elem [dir])) {
					If (elem.nodeType === 1 || checkNonElements) {
						OuterCache = elem [expando] || (Elem [expando] = {});

						// Soporte: IE <9 solamente
						// Defender contra atributos clonados (jQuery gh-1709)
						UniqueCache = outerCache [elem.uniqueID] || (OuterCache [elem.uniqueID] = {});

						If ((oldCache = uniqueCache [dir]) &&
							OldCache [0] === dirruns && oldCache [1] === doneName) {

							// Asignar a newCache para que los resultados vuelvan a propagarse a elementos anteriores
							Return (newCache [2] = oldCache [2]);
						} Else {
							// Reutilizar newcache para que los resultados vuelvan a propagarse a elementos anteriores
							UniqueCache [dir] = newCache;

							// Un partido significa que hemos terminado; Un fallo significa que tenemos que seguir revisando
							If ((newCache [2] = matcher (elem, context, xml))) {
								Devuelve verdadero;
							}
						}
					}
				}
			}
		};
}

Elemento de funciónMatcher (matchers) {
	Return matchers.length> 1?
		Función (elem, context, xml) {
			Var i = matchers.length;
			mientras yo-- ) {
				If (! Matchers [i] (elem, context, xml)) {
					falso retorno;
				}
			}
			Devuelve verdadero;
		}:
		Matchers [0];
}

Function multipleContexts (selector, contextos, resultados) {
	Var i = 0,
		Len = contexts.length;
	Para (i <len; i ++) {
		Sizzle (selector, contextos [i], resultados);
	}
	Resultados de retorno;
}

Función condensar (incomparable, mapa, filtro, contexto, xml) {
	Var elem
		NewUnmatched = [],
		I = 0,
		Len = unmatched.length,
		Mapeado = mapa! = Nulo;

	Para (i <len; i ++) {
		If ((elem = unmatched [i])) {
			If (! Filter || filter (elem, context, xml)) {
				NewUnmatched.push (elem);
				If (mapeado) {
					Map.push (i);
				}
			}
		}
	}

	Return newUnmatched;
}

Función setMatcher (preFiltro, selector, matcher, postFilter, postFinder, postSelector) {
	If (postFilter &&! PostFilter [expando]) {
		PostFilter = setMatcher (postFilter);
	}
	If (postFinder &&! PostFinder [expando]) {
		PostFinder = setMatcher (postFinder, postSelector);
	}
	Return markFunction (función (semilla, resultados, contexto, xml) {
		Var temp, i, elem,
			PreMap = [],
			PostMap = [],
			Preexistentes = resultados.longitud,

			// Obtener elementos iniciales de semilla o contexto
			Elems = semilla || MultipleContexts (selector || "*", context.nodeType? [Context]: context, []),

			// Prefilter para obtener la entrada de Matcher, preservando un mapa para la sincronización de resultados de semilla
			MatcherIn = preFiltro && (selector de semillas ||!
				Condensar (elems, preMap, preFilter, contexto, xml):
				Elems

			MatcherOut = matcher?
				// Si tenemos un postFinder, o una semilla filtrada, o postFilter sin semilla o resultados preexistentes,
				PostFinder || (Seed? PreFilter: preexistente || postFilter)?

					// ... el procesamiento intermedio es necesario
					[]:

					// ... de lo contrario utilizar los resultados directamente
					Resultados:
				MatcherIn;

		// Buscar coincidencias principales
		If (matcher) {
			Matcher (matcherIn, matcherOut, contexto, xml);
		}

		// Apply postFilter
		If (postFilter) {
			Temp = condense (matcherOut, postMap);
			PostFilter (temp, [], contexto, xml);

			// Desempare los elementos que fallan moviéndolos de nuevo a matcherIn
			I = temp.length;
			mientras yo-- ) {
				If ((elem = temp [i])) {
					MatcherOut [postMap [i]] =! (MatcherIn [postMap [i]] = elem);
				}
			}
		}

		Si la semilla
			If (postFinder || preFilter) {
				If (postFinder) {
					// Obtener el matcherOut final condensando este intermediario en contextos postFinder
					Temp = [];
					I = matcherOut.length;
					mientras yo-- ) {
						If ((elem = matcherOut [i])) {
							// Restore matcherIn since elem aún no es un partido final
							Temp.push ((matcherIn [i] = elem));
						}
					}
					PostFinder (null, (matcherOut = []), temp, xml);
				}

				// Mover los elementos de la semilla a los resultados para mantenerlos sincronizados
				I = matcherOut.length;
				mientras yo-- ) {
					If ((elem = matcherOut [i]) &&
						(Temp = postFinder? IndexOf (semilla, elem): preMap [i])> -1) {

						Semilla [temp] =! (Resultados [temp] = elem);
					}
				}
			}

		// Añadir elementos a los resultados, a través de postFinder si está definido
		} Else {
			MatcherOut = condensar (
				MatcherOut === resultados?
					MatcherOut.splice (preexisting, matcherOut.length):
					MatcherOut
			);
			If (postFinder) {
				PostFinder (null, results, matcherOut, xml);
			} Else {
				Push.apply (results, matcherOut);
			}
		}
	});
}

Función matcherFromTokens (tokens) {
	Var checkContext, matcher, j,
		Len = tokens.length,
		LeadingRelative = Expr.relative [tokens [0] .type],
		ImplicitRelative = leadingRelative || Expr.relative [""],
		I = líderRelativo? 1: 0,

		// El encuestador fundacional asegura que los elementos son accesibles desde el (los) contexto (s) de nivel superior
		MatchContext = addCombinator (function (elem) {
			Return elem === checkContext;
		}, ImplicitRelative, true),
		MatchAnyContext = addCombinator (function (elem) {
			Return indexOf (checkContext, elem)> -1;
		}, ImplicitRelative, true),
		Matchers = [function (elem, context, xml) {
			Var ret = (! LeadingRelative && (xml || context! == outermostContext)) || (
				(CheckContext = contexto) .nodeType?
					MatchContext (elem, context, xml):
					MatchAnyContext (elem, context, xml));
			// Evita colgar el elemento (edición # 299)
			CheckContext = null;
			Return ret;
		}];

	Para (i <len; i ++) {
		If ((matcher = Expr.relative [tokens [i] .type])) {
			Matchers = [addCombinator (elementMatcher (matchers), matcher)];
		} Else {
			Matcher = Expr.filter [tokens [i] .type] .apply (null, tokens [i] .matches);

			// Regresa especial al ver un matador posicional
			If (matcher [expando]) {
				// Encuentra el siguiente operador relativo (si existe) para un manejo adecuado
				J = ++ i;
				Para j j len
					If (Expr.relative [tokens [j] .type]) {
						descanso;
					}
				}
				Return setMatcher (
					I> 1 && elementMatcher (matchers),
					I> 1 && toSelector (
						// Si el token anterior era un combinador descendente, inserta un elemento implícito `*`
						Tokens.slice (0, i - 1) .concat ({value: tokens [i - 2] .type === ""? "*": ""})
					) .replace (rtrim, "$ 1"),
					Matcher
					I <j && matcherFromTokens (tokens.slice (i, j)),
					J <len && matcherFromTokens ((tokens = tokens.slice (j))),
					J <len && toSelector (tokens)
				);
			}
			Matchers.push (matcher);
		}
	}

	Return elementMatcher (matchers);
}

Función matcherFromGroupMatchers (elementMatchers, setMatchers) {
	Var bySet = setMatchers.length> 0,
		ByElement = elementMatchers.length> 0,
		SuperMatcher = función (semilla, contexto, xml, resultados, outermost) {
			Var elem, j, matcher,
				MatchedCount = 0,
				I = "0",
				Unmatched = seed && [],
				SetMatched = [],
				ContextBackup = outermostContext,
				// Debemos tener siempre elementos de semilla o contexto externo
				Elems = semilla || ByElement && Expr.find ["TAG"] ("*", más externo),
				// Utilice dirruns enteros iff este es el matcher más externo
				DirrunsUnique = (dirruns + = contextBackup == null? 1: Math.random () || 0.1),
				Len = elems.length;

			Si (exterior) {
				OutermostContext = context === documento || Contexto || más exterior;
			}

			// Agrega elementos pasando elementMatchers directamente a los resultados
			// Soporte: IE <9, Safari
			// Tolerar las propiedades de NodeList (IE: "longitud"; Safari: <número>) elementos coincidentes por id
			Para (; i! == len && (elem = elems [i])! = Null; i ++) {
				If (byElement && elem) {
					J = 0;
					If (! Context && elem.ownerDocument! == document) {
						SetDocument (elem);
						Xml =! DocumentIsHTML;
					}
					While ((matcher = elementMatchers [j ++])) {
						If (matcher (elem, context || document, xml)) {
							Results.push (elem);
							descanso;
						}
					}
					Si (exterior) {
						Dirruns = dirrunsUnique;
					}
				}

				// Seguimiento de elementos incomparables para filtros definidos
				If (bySet) {
					// Habrán pasado por todos los posibles matchers
					If ((elem =! Matcher && elem)) {
						EmparejadoCount--;
					}

					// Alargar la matriz para cada elemento, igualado o no
					Si la semilla
						Unmatched.push (elem);
					}
				}
			}

			// `i` es ahora el recuento de los elementos visitados anteriormente, y su adición a` matchedCount`
			// hace que este último no sea negativo.
			CoincididoCount + = i;

			// Aplicar filtros establecidos a elementos no coincidentes
			// NOTA: Esto puede omitirse si no hay elementos no coincidentes (por ejemplo, `matchedCount`
			// es igual a `i`), a menos que no visitamos _any_ elementos en el bucle anterior porque tenemos
			// no hay partidor de elementos ni semilla.
			// Incremento de una inicial-cadena "0" `i` permite que` i` siga siendo una cadena sólo en ese
			// caso, lo que resultará en un "00" `matchedCount` que difiere de` i` pero también es
			// numéricamente cero.
			If (bySet && i! == matchedCount) {
				J = 0;
				Mientras que ((matcher = setMatchers [j ++])) {
					Matcher (incomparable, setMatched, contexto, xml);
				}

				Si la semilla
					// Reintegrate elementos para eliminar la necesidad de ordenar
					If (matchedCount> 0) {
						mientras yo-- ) {
							If (! (Incomparable [i] || setMatched [i])) {
								SetMatched [i] = pop.call (resultados);
							}
						}
					}

					// Descartar valores de marcador de posición de índice para obtener sólo coincidencias reales
					SetMatched = condensar (setMatched);
				}

				// Añadir juegos a resultados
				Push.apply (results, setMatched);

				// Seedless establece coincidencias que triunfan múltiples coincidentes exitosos estipulan clasificación
				If (outermost &&! Seed && setMatched.length> 0 &&
					(MatchedCount + setMatchers.length)> 1) {

					Sizzle.uniqueSort (resultados);
				}
			}

			// Anula la manipulación de globales por partidores anidados
			Si (exterior) {
				Dirruns = dirrunsUnique;
				OutermostContext = contextBackup;
			}

			Retorno inigualable;
		};

	Return bySet?
		MarkFunction (superMatcher):
		SuperMatcher;
}

Compile = Sizzle.compile = function (selector, match / * Sólo para uso interno * /) {
	Var i,
		SetMatchers = [],
		ElementMatchers = [],
		Cached = compilerCache [selector + ""];

	If (! Cached) {
		// Generar una función de funciones recursivas que se pueden utilizar para comprobar cada elemento
		Si coinciden
			Match = tokenize (selector);
		}
		I = match.length;
		mientras yo-- ) {
			Cached = matcherFromTokens (coincidencia [i]);
			If (en caché [expando]) {
				SetMatchers.push (en caché);
			} Else {
				ElementMatchers.push (en caché);
			}
		}

		// Caché la función compilada
		Cached = compilerCache (selector, matcherFromGroupMatchers (elementMatchers, setMatchers));

		// Guardar selector y tokenización
		Cached.selector = selector;
	}
	Retorno en caché;
};

Todos los derechos reservados
 * Una función de selección de bajo nivel que funciona con Sizzle compilado
 * Funciones selectoras
 * @param {String | Function} selector Un selector o un pre-compilado
 * Función selectora construida con Sizzle.compile
 Contexto @param {Element}
 * @param {Array} [resultados]
 * @param {Array} [semilla] Un conjunto de elementos para coincidir con
 * /
Select = Sizzle.select = function (selector, context, results, seed) {
	Var i, tokens, símbolo, tipo, hallazgo,
		Compilado = selector de tipo === "función" & & selector,
		Match =! Seed && tokenize ((selector = compilado.selector || selector));

	Resultados = resultados || [];

	// Intente minimizar las operaciones si solo hay un selector en la lista y no hay semilla
	// (el último de los cuales nos garantiza el contexto)
	If (match.length === 1) {

		// Reducir el contexto si el selector compuesto principal es un ID
		Tokens = partido [0] = partido [0] .slice (0);
		If (tokens.length> 2 && (token = tokens [0]). Type === "ID" &&
				Support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative [tokens [1] .type]) {

			Context = (Expr.find ["ID"] (token.matches [0] .replace (runescape, funescape), contexto) || []) [0];
			If (! Context) {
				Resultados de retorno;

			// Los combinados precompilados verifican la ascendencia, así que sube un nivel
			} Else if (compilado) {
				Context = context.parentNode;
			}

			Selector = selector.slice (tokens.shift (). Value.length);
		}

		// Obtener un conjunto de semillas para la coincidencia de derecha a izquierda
		I = matchExpr ["needsContext"]. Prueba (selector)? 0: tokens.length;
		mientras yo-- ) {
			Token = tokens [i];

			// Abortar si golpeamos un combinador
			If (Expr.relative [(type = token.type)]) {
				descanso;
			}
			If ((find = Expr.find [tipo])) {
				// Search, expandiendo el contexto de los combinadores hermanos principales
				If ((seed = find (
					Token.matches [0] .replace (runescape, funescape),
					Rsibling.test (tokens [0] .type) && testContext (context.parentNode) || contexto
				))) {

					// Si la semilla está vacía o no hay fichas, podemos regresar temprano
					Tokens.splice (i, 1);
					Selector = seed.length && toSelector (tokens);
					If (! Selector) {
						Push.apply (resultados, semilla);
						Resultados de retorno;
					}

					descanso;
				}
			}
		}
	}

	// Compilar y ejecutar una función de filtrado si no se proporciona
	// Proporcionar `match` para evitar la retokenización si modificamos el selector anterior
	(Compilado || compilar (selector, partido)) (
		semilla,
		contexto,
		! DocumentIsHTML,
		Resultados,
		Contexto || Rsibling.test (selector) && testContext (context.parentNode) || contexto
	);
	Resultados de retorno;
};

// Asignaciones únicas

// Clasificar la estabilidad
Support.sortStable = expando.split (""). Sort (sortOrder) .join ("") === expando;

// Soporte: Chrome 14-35 +
// Suponga siempre duplicados si no se pasan a la función de comparación
Support.detectDuplicates = !! hasDuplicate;

// Inicializar contra el documento predeterminado
SetDocument ();

// Soporte: Webkit <537.32 - Safari 6.0.3 / Chrome 25 (arreglado en Chrome 27)
// Los nodos separados se siguen confundiendo * el uno al otro *
Support.sortDetached = assert (función (div1) {
	// Debería devolver 1, pero devuelve 4 (siguiente)
	Return div1.compareDocumentPosition (document.createElement ("div")) & 1;
});

// Soporte: IE <8
// Impedir atributo / propiedad "interpolación"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
If (! Assert (function (div) {
	Div.innerHTML = "<a href='#'> </a>";
	Return div.firstChild.getAttribute ("href") === "#";
})) {
	AddHandle ("type | href | height | width", función (elem, name, isXML) {
		If (! IsXML) {
			Return elem.getAttribute (name, name.toLowerCase () === "tipo"? 1: 2);
		}
	});
}

// Soporte: IE <9
// Utilizar defaultValue en lugar de getAttribute ("value")
If (! Support.attributes ||! Assert (function (div) {
	Div.innerHTML = "<input />";
	Div.firstChild.setAttribute ("valor", "");
	Return div.firstChild.getAttribute ("value") === "";
})) {
	AddHandle ("valor", función (elem, nombre, isXML) {
		If (! IsXML && elem.nodeName.toLowerCase () === "input") {
			Return elem.defaultValue;
		}
	});
}

// Soporte: IE <9
// Usa getAttributeNode para buscar booleanos cuando getAttribute se encuentra
If (! Assert (function (div) {
	Return div.getAttribute ("disabled") == null;
})) {
	AddHandle (booleanos, función (elem, nombre, isXML) {
		Var val
		If (! IsXML) {
			Return elem [name] === true? Name.toLowerCase ():
					(Val = elem.getAttributeNode (nombre)) && val.specified?
					Val.value:
				nulo;
		}
	});
}

Regreso Sizzle;

})( ventana );



JQuery.find = Sizzle;
JQuery.expr = Sizzle.selectors;
JQuery.expr [":"] = jQuery.expr.pseudos;
JQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
JQuery.text = Sizzle.getText;
JQuery.isXMLDoc = Sizzle.isXML;
JQuery.contains = Sizzle.contains;



Var dir = función (elem, dir, until) {
	Var combinado = [],
		Truncate = until! == undefined;

	Mientras que ((elem = elem [dir]) && elem.nodeType! == 9) {
		If (elem.nodeType === 1) {
			If (truncar && jQuery (elem) .is (hasta)) {
				descanso;
			}
			Matched.push (elem);
		}
	}
	Retorno igualado;
};


Var siblings = función (n, elem) {
	Var varía = [];

	Para (; n; n = n.nextSiguiente) {
		If (n.nodeType === 1 && n! == elem) {
			Matched.push (n);
		}
	}

	Retorno igualado;
};


Var rneedsContext = jQuery.expr.match.needsContext;

Var rsingleTag = (/ ^ <([\ w -] +) \ s * \ /?> (?: <\ / \ 1> |) $ /);



Var risSimple = /^.[^:#\[\.,]*$/;

// Implementar la misma funcionalidad para el filtro y no
Función winnow (elementos, calificador, no) {
	If (jQuery.isFunction (calificador)) {
		Return jQuery.grep (elementos, function (elem, i) {
			/ * Jshint -W018 * /
			Return !! qualifier.call (elem, i, elem)! == no;
		});

	}

	If (qualifier.nodeType) {
		Return jQuery.grep (elementos, function (elem) {
			Return (elem === qualifier)! == no;
		});

	}

	If (tipo de calificador === "cadena") {
		If (risSimple.test (calificador)) {
			Return jQuery.filter (calificador, elementos, no);
		}

		Qualifier = jQuery.filter (calificador, elementos);
	}

	Return jQuery.grep (elementos, function (elem) {
		Return (jQuery.inArray (elem, qualifier)> -1)! == not;
	});
}

JQuery.filter = function (expr, elems, not) {
	Var elem = elems [0];

	si no ) {
		Expr = ": no (" + expr + ")";
	}

	Return elems.length === 1 && elem.nodeType === 1?
		JQuery.find.matchesSelector (elem, expr)? [Elem]: []:
		JQuery.find.matches (expr, jQuery.grep (elems, function (elem) {
			Return elem.nodeType === 1;
		}));
};

JQuery.fn.extend ({
	Find: function (selector) {
		Var i,
			Ret = [],
			Auto = esto,
			Len = self.length;

		If (typeof selector! == "string") {
			Return this.pushStack (jQuery (selector) .filter (function () {
				Para (i = 0; i <len; i ++) {
					If (jQuery.contains (self [i], this)) {
						Devuelve verdadero;
					}
				}
			}));
		}

		Para (i = 0; i <len; i ++) {
			JQuery.find (selector, self [i], ret);
		}

		// Necesario porque $ (selector, context) se convierte en $ (context) .find (selector)
		Ret = this.pushStack (len> 1? JQuery.unique (ret): ret);
		Ret.selector = this.selector? This.selector + "" + selector: selector;
		Return ret;
	},
	Filtro: función (selector) {
		Return this.pushStack (winnow (esto, selector || [], false));
	},
	No: function (selector) {
		Return this.pushStack (winnow (esto, selector || [], true));
	},
	Es: function (selector) {
		Regreso !! winnow (
			esta,

			// Si se trata de un selector posicional / relativo, compruebe la pertenencia al conjunto devuelto
			// so $ ("p: first"). Is ("p: last") no devolverá true para un doc con dos "p".
			Typeof selector === "cadena" && rneedsContext.test (selector)?
				JQuery (selector):
				Selector || [],
			falso
		).longitud;
	}
});


// Inicializa un objeto jQuery


// Una referencia central a la raíz jQuery (documento)
Var rootjQuery,

	// Una forma sencilla de buscar cadenas HTML
	// Priorizar #id sobre <tag> para evitar XSS vía location.hash (# 9521)
	// Reconocimiento estricto de HTML (# 11290: debe comenzar con <)
	RquickExpr = / ^ (?: \ S * (<\ W \ W] +>) [^>] * | # ([\ w -] *)) $ /

	Init = jQuery.fn.init = function (selector, context, root) {
		Var match, elem;

		// HANDLE: $ (""), $ (null), $ (undefined), $ (false)
		If (! Selector) {
			Devolver esto;
		}

		// init acepta un rootjQuery alternativo
		// para migrar puede soportar jQuery.sub (gh-2101)
		Root = root || RootjQuery;

		// Gestionar cadenas HTML
		If (selector de tipo === "cadena") {
			If (selector.charAt (0) === "<" &&
				Selector.charAt (selector.length - 1) === ">" &&
				Selector.length> = 3) {

				// Supongamos que las cadenas que comienzan y terminan con <> son HTML y saltan la verificación de regex
				Match = [null, selector, null];

			} Else {
				Match = rquickExpr.exec (selector);
			}

			// Hacer coincidir html o asegurarse de que no se especifica contexto para #id
			If (match && (match [1] ||! Context)) {

				// HANDLE: $ (html) -> $ (matriz)
				If (match [1]) {
					Context = context instanceof jQuery? Contexto [0]: contexto;

					// scripts es true para back-compat
					// Intencionalmente deja que el error sea lanzado si parseHTML no está presente
					JQuery.merge (esto, jQuery.parseHTML (
						Partido [1],
						Context && context.nodeType? Context.ownerDocument || Contexto: documento,
						cierto
					));

					// HANDLE: $ (html, accesorios)
					If (rsingleTag.test (match [1]) && jQuery.isPlainObject (context)) {
						Para (partido en contexto) {

							// Propiedades del contexto se llaman como métodos si es posible
							If (jQuery.isFunction (this [match])) {
								Este [partido] (contexto [fósforo]);

							// ... y de otra manera establecidos como atributos
							} Else {
								This.attr (coincidencia, contexto [coincidencia]);
							}
						}
					}

					Devolver esto;

				// HANDLE: $ (# id)
				} Else {
					Elem = document.getElementById (coincidencia [2]);

					// Compruebe que parentNode se bloquee cuando se devuelve Blackberry 4.6
					// nodos que ya no están en el documento # 6963
					If (elem && elem.parentNode) {

						// Manejar el caso en el que IE y Opera devuelven elementos
						// por nombre en lugar de ID
						If (elem.id! == match [2]) {
							Return rootjQuery.find (selector);
						}

						// De lo contrario, inyectamos el elemento directamente en el objeto jQuery
						Esta longitud = 1;
						Este [0] = elem;
					}

					This.context = document;
					This.selector = selector;
					Devolver esto;
				}

			// HANDLE: $ (expr, $ (...))
			} Else if (! Context || context.jquery) {
				Return (context || root) .confid (selector);

			// HANDLE: $ (expr, contexto)
			// (que es justo equivalente a: $ (context) .find (expr)
			} Else {
				Return this.constructor (context) .find (selector);
			}

		// HANDLE: $ (DOMElement)
		} Else if (selector.nodeType) {
			This.context = this [0] = selector;
			Esta longitud = 1;
			Devolver esto;

		// HANDLE: $ (función)
		// Atajo para documento listo
		} Else if (jQuery.isFunction (selector)) {
			Return typeof root.ready! == "undefined"?
				Root.ready (selector):

				// Ejecutar inmediatamente si no está listo
				Selector (jQuery);
		}

		If (selector.selector! == undefined) {
			This.selector = selector.selector;
			This.context = selector.context;
		}

		Return jQuery.makeArray (selector, this);
	};

// Da a la función init el prototipo jQuery para instanciación posterior
Init.prototype = jQuery.fn;

// Inicializar referencia central
RootjQuery = jQuery (documento);


Var rparentsprev = / ^ (?: padres | prev (?: Hasta | Todos)) /,

	// métodos garantizados para producir un conjunto único cuando se inicia desde un conjunto único
	GuaranteedUnique = {
		Hijos: cierto,
		Contenido: verdadero,
		Siguiente: true,
		Prev: true
	};

JQuery.fn.extend ({
	Tiene: function (target) {
		Var i,
			Targets = jQuery (target, this),
			Len = targets.length;

		Return this.filter (function () {
			Para (i = 0; i <len; i ++) {
				If (jQuery.contains (this, targets [i])) {
					Devuelve verdadero;
				}
			}
		});
	},

	Más cercano: function (selectors, context) {
		Var cur
			I = 0,
			L = esta longitud,
			Emparejado = [],
			Pos = rneedsContext.test (selectors) || Tipo de selectores! == "cadena"?
				JQuery (selectors, context || this.context):
				0;

		Para (i <l; i ++) {
			Para (cur = este [i]; cur && cur! == context; cur = cur.parentNode) {

				// Saltar siempre fragmentos de documento
				If (cur.nodeType <11 && (pos?
					Pos.index (cur)> -1:

					// No pase los no-elementos a Sizzle
					Cur.nodeType === 1 &&
						JQuery.find.matchesSelector (cur, selectors))) {

					Emparejado.push (cur);
					descanso;
				}
			}
		}

		Return this.pushStack (matched.length> 1? JQuery.uniqueSort (emparejado): emparejado);
	},

	// Determinar la posición de un elemento dentro de
	// el conjunto de elementos
	Índice: function (elem) {

		// Sin argumento, return index in parent
		If (! Elem) {
			Return (this [0] && this [0] .parentNode)? This.first (). PrevAll (). Longitud: -1;
		}

		// índice en el selector
		If (typeof elem === "cadena") {
			Return jQuery.inArray (este [0], jQuery (elem));
		}

		// Localice la posición del elemento deseado
		Return jQuery.inArray (

			// Si recibe un objeto jQuery, se utiliza el primer elemento
			Elem.jquery? Elem [0]: elem, this);
	},

	Add: function (selector, context) {
		Return this.pushStack (
			JQuery.uniqueSort (
				JQuery.merge (this.get (), jQuery (selector, context))
			)
		);
	},

	AddBack: function (selector) {
		Return this.add (selector == null?
			This.prevObject: this.prevObject.filter (selector)
		);
	}
});

Función hermano (cur, dir) {
	Hacer
		Cur = cur [dir];
	} While (cur && cur.nodeType! == 1);

	Return cur
}

JQuery.each ({
	Parent: function (elem) {
		Var parent = elem.parentNode;
		Return parent && parent.nodeType! == 11? Parent: null;
	},
	Padres: function (elem) {
		Return dir (elem, "parentNode");
	},
	ParentsUntil: function (elem, i, until) {
		Return dir (elem, "parentNode", hasta);
	},
	Siguiente: function (elem) {
		Hermano de vuelta (elem, "nextSibling");
	},
	Prev: function (elem) {
		Hermano de vuelta (elem, "previousSibling");
	},
	NextAll: function (elem) {
		Return dir (elem, "nextSibling");
	},
	PrevAll: function (elem) {
		Return dir (elem, "previousSibling");
	},
	NextUntil: function (elem, i, until) {
		Return dir (elem, "nextSibling", hasta);
	},
	PrevUntil: function (elem, i, until) {
		Return dir (elem, "previousSibling", hasta);
	},
	Hermanos: function (elem) {
		Return siblings ((elem.parentNode || {}) .firstChild, elem);
	},
	Niños: function (elem) {
		Hermanos de vuelta (elem.firstChild);
	},
	Contenido: function (elem) {
		Return jQuery.nodeName (elem, "iframe")?
			Elem.contentDocument || Elem.contentWindow.document:
			JQuery.merge ([], elem.childNodes);
	}
}, Function (nombre, fn) {
	JQuery.fn [nombre] = función (hasta, selector) {
		Var ret = jQuery.map (esto, fn, hasta);

		If (name.slice (-5)! == "Until") {
			Selector = hasta;
		}

		If (selector && selector de tipo === "cadena") {
			Ret = jQuery.filter (selector, ret);
		}

		If (this.length> 1) {

			// Eliminar duplicados
			If (! GuaranteedUnique [nombre]) {
				Ret = jQuery.uniqueSort (ret);
			}

			// Orden inversa para los padres * y prev-derivados
			If (rparentsprev.test (name)) {
				Ret = ret.reverse ();
			}
		}

		Return this.pushStack (ret);
	};
});
Var rnotwhite = (/ \ S + / g);



// Convertir las opciones con formato de cadena en las de formato de objeto
Function createOptions (opciones) {
	Var object = {};
	JQuery.each (options.match (rnotwhite) || [], function (_, flag) {
		Objeto [bandera] = verdadero;
	});
	Devolver objeto;
}

Todos los derechos reservados
 * Crear una lista de callback utilizando los siguientes parámetros:
 *
 * Opciones: una lista opcional de opciones separadas por el espacio que cambiarán cómo
 * La lista de callback se comporta o un objeto de opción más tradicional
 *
 * Por defecto, una lista de callback actuará como una lista de callback de eventos y puede ser
 * "Disparado" varias veces.
 *
 * Posibles opciones:
 *
 * Una vez: se asegurará de que la lista de devolución de llamada sólo se puede disparar una vez (como un Aplazado)
 *
 * Memoria: mantendrá un registro de los valores anteriores y llamará a cualquier devolución de llamada agregada
 * Después de la lista se ha disparado de inmediato con la última "memorizado"
 * Valores (como un diferido)
 *
 * Único: garantizará que una devolución de llamada sólo se puede agregar una vez (no hay duplicado en la lista)
 *
 * StopOnFalse: interrumpe las llamadas cuando una devolución de llamada devuelve false
 *
 * /
JQuery.Callbacks = function (opciones) {

	// Convertir opciones de String-formatted a Object-formatted si es necesario
	// (primero comprobamos la caché)
	Opciones = opciones de tipo === "cadena"?
		CreateOptions (opciones):
		JQuery.extend ({}, opciones);

	Var // Marca para saber si la lista está disparando
		disparo,

		// Valor del último fuego para listas no olvidables
		memoria,

		// Marcar para saber si la lista ya fue despedida
		despedido,

		// Bandera para evitar disparos
		Bloqueado

		// Lista de devolución de llamada actual
		List = [],

		// Cola de datos de ejecución para listas repetibles
		Queue = [],

		// El índice de devolución de llamada en curso (modificado por agregar / quitar según sea necesario)
		FiringIndex = -1,

		// Respaldo de incendios
		Fire = function () {

			// Aplicar el disparo único
			Locked = opciones.una vez;

			// Ejecutar callbacks para todas las ejecuciones pendientes,
			// respetando las modificaciones de firingIndex y los cambios de tiempo de ejecución
			Disparado = disparo = verdadero;
			For (; queue.length; firingIndex = -1) {
				Memory = queue.shift ();
				While (++ firingIndex <list.length) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// Si tenemos memoria de una ejecución pasada, deberíamos disparar después de agregar
					Si (memoria &&! Disparo) {
						FiringIndex = list.length - 1;
						Queue.push (memoria);
					}

					(Función add (args) {
						JQuery.each (args, function (_, arg) {
							If (jQuery.isFunction (arg)) {
								If (! Options.unique ||! Self.has (arg)) {
									List.push (arg);
								}
							} Else if (arg && arg.length && jQuery.type (arg)! == "string") {

								// Inspeccionar recursivamente
								Añadir (arg);
							}
						});
					}) (Argumentos);

					Si (memoria &&! Disparo) {
						fuego();
					}
				}
				Devolver esto;
			},

			// Eliminar una devolución de llamada de la lista
			Remove: function () {
				JQuery.each (argumentos, function (_, arg) {
					Índice var;
					Mientras que ((índice = jQuery.inArray (arg, lista, índice))> -1) {
						List.splice (índice, 1);

						// Manejar índices de disparoIf 
						(índice <= f iringIndex) {
							FiringIndex--;
						}
					}
				});
				Devolver esto;
			},

			// Compruebe si una devolución de llamada determinada está en la lista.
			// Si no se da ningún argumento, devuelve si la lista tiene o no devoluciones de llamada.
			Tiene: function (fn) {
				Devolver fn
					JQuery.inArray (fn, list)> -1:
					List.length> 0;
			},

			// Eliminar todas las devoluciones de llamada de la lista
			Empty: function () {
				If (list) {
					List = [];
				}
				Devolver esto;
			},

			// Desactivar .fire y .add
			// Anular cualquier ejecución actual / pendiente
			// Borrar todos los callbacks y valores
			Disable: function () {
				Locked = queue = [];
				List = memory = "";
				Devolver esto;
			},
			Disabled: function () {
				Return! List;
			},

			// Desactivar .fire
			// También deshabilitar .add a menos que tengamos memoria (ya que no tendría ningún efecto)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		Promise.pipe = promise.then;

		// Añadir métodos específicos de lista
		JQuery.each (tuplas, function (i, tuple) {
			Var lista = tupla [2],
				StateString = tupla [3];

			// promesa [hecho | Fallar | Progreso] = list.add
			Promesa [tupla [1]] = list.add;

			// Manejar estado
			If (stateString) {
				List.add (function () {

					// state = [resolved | Rechazado
					State = stateString;

				// [reject_list | Resolve_list] .disable; Progress_list.lock
				}, Tuplas [i ^ 1] [2] .disable, tuplas [2] [2] .lock);
			}

			// aplazado [resolver | Rechazar | Notificar
			Diferido [tupla [0]] = función () {
				Diferido [tupla [0] + "Con"] (esto === diferido? Promesa: esto, argumentos);
				Devolver esto;
			};
			Diferido [tupla [0] + "Con"] = list.fireWith;
		});

		// Hacer la promesa diferida
		Promise.promise (aplazado);

		// llamada dada func si alguna
		If (func) {
			Func.call (diferido, diferido);
		}

		// ¡Todo listo!
		Retorno diferido;
	},

	// Ayudante diferido
	Cuando: function (subordinate / *, ..., subordinateN * /) {
		Var i = 0,
			ResolveValues ??= slice.call (argumentos),
			Length = resolveValues.length,

			// el recuento de subordinados incompletos
			Restante = longitud! == 1 ||
				(Subordinado && jQuery.isFunction (subordinate.promise))? Longitud: 0,

			// el maestro Diferido.
			// Si solveValues ??consiste en solo un solo Deferred, solo usa eso.
			Deferred = restante === 1? Subordinado: jQuery.Deferred (),

			// Función de actualización para valores de resolución y progreso
			UpdateFunc = función (i, contextos, valores) {
				Función de retorno (valor) {
					Contextos [i] = esto;
					Valores [i] = arguments.length> 1? Slice.call (arguments): valor;
					If (values ??=== progressValues) {
						Deferred.notifyWith (contextos, valores);

					} Else if (! (--remaining)) {
						Deferred.resolveWith (contextos, valores);
					}
				};
			},

			ProgressValues, progressContexts, resolveContexts;

		// agrega a los oyentes a los subordinados postergados; Tratar a otros como resueltos
		If (length> 1) {
			ProgressValues ??= new Array (longitud);
			ProgressContexts = new Array (longitud);
			ResolveContexts = new Array (longitud);
			Para (i <longitud; i ++) {
				If (solveValues ??[i] && jQuery.isFunction (resolveValues ??[i] .promise)) {
					ResolveValues ??[i] .promise ()
						.progress (updateFunc (i, progressContexts, progressValues))
						.done (updateFunc (i, resolveContexts, resolveValues))
						.fail (deferred.reject);
				} Else {
					--restante;
				}
			}
		}

		// si no estamos esperando nada, resuelve el maestro
		Si queda
			Deferred.resolveWith (resolveContexts, resolveValues);
		}

		Return deferred.promise ();
	}
});


// El diferido utilizado en DOM listo
Var readyList;

JQuery.fn.ready = function (fn) {

	// Añadir la devolución de llamada
	JQuery.ready.promise (). Hecho (fn);

	Devolver esto;
};

JQuery.extend ({

	// ¿Está listo el DOM para ser utilizado? Establecer en true una vez que se produce.
	IsReady: falso,

	// Un contador para rastrear cuántos ítems esperar antes
	// se activa el evento listo. Ver # 6781
	ReadyWait: 1,

	// Mantener (o liberar) el evento listo
	HoldReady: función (mantener pulsada) {
		Si (espera) {
			JQuery.readyWait ++;
		} Else {
			JQuery.ready (true);
		}
	},

	// Manejar cuando el DOM está listo
	Listo: función (espera) {

		// Abortar si hay espera pendiente o ya estamos listos
		If (wait === true? --jQuery.readyWait: jQuery.isReady) {
			regreso;
		}

		// Recuerde que el DOM está listo
		JQuery.isReady = true;

		// Si se dispara un evento normal de DOM Ready, decrementa y espera si es necesario
		If (wait! == true && --jQuery.readyWait> 0) {
			regreso;
		}

		// Si hay funciones enlazadas, para ejecutar
		ReadyList.resolveWith (documento, [jQuery]);

		// Activar eventos enlazados enlazados
		If (jQuery.fn.triggerHandler) {
			JQuery (documento) .triggerHandler ("listo");
			JQuery (documento) .off ("listo");
		}
	}
});

Todos los derechos reservados
 * Método de limpieza para eventos dom ready
 * /
Función detach () {
	If (document.addEventListener) {
		Document.removeEventListener ("DOMContentLoaded", completado);
		Window.removeEventListener ("carga", completado);

	} Else {
		Document.detachEvent ("onreadystatechange", completado);
		Window.detachEvent ("onload", completado);
	}
}

Todos los derechos reservados
 * El manejador de eventos listo y el método de limpieza automática
 * /
Función completada () {

	// readyState === "complete" es lo suficientemente bueno para que podamos llamar a la dom preparada en oldIE
	If (document.addEventListener ||
		Window.event.type === "carga" ||
		Document.readyState === "complete") {

		despegar();
		JQuery.ready ();
	}
}

JQuery.ready.promise = function (obj) {
	If (! ReadyList) {

		ReadyList = jQuery.Deferred ();

		// Captura casos en los que $ (document) .ready () se llama
		// después de que el evento del navegador ya haya ocurrido.
		// Soporte: IE6-10
		// IE más antiguo a veces señala "interactivo" demasiado pronto
		If (document.readyState === "complete" ||
			(Document.readyState! == "loading" &&! Document.documentElement.doScroll)) {

			// Manejar de forma asincrónica para permitir a los scripts la oportunidad de retrasar
			Window.setTimeout (jQuery.ready);

		// Los navegadores basados ??en estándares soportan DOMContentLoaded
		} Else if (document.addEventListener) {

			// Utilizar la devolución de llamada útil del evento
			Document.addEventListener ("DOMContentLoaded", completado);

			// Una alternativa a window.onload, que siempre funcionará
			Window.addEventListener ("load", completado);

		// Si se utiliza el modelo de eventos IE
		} Else {

			// Asegúrese de disparar antes de la carga, tal vez tarde pero seguro también para iframes
			Document.attachEvent ("onreadystatechange", completado);

			// Una alternativa a window.onload, que siempre funcionará
			Window.attachEvent ("onload", completado);

			// Si IE y no un marco
			// comprueba continuamente si el documento está listo
			Var top = false;

			tratar {
				Top = window.frameElement == null && document.documentElement;
			Captura {sustantivo}

			If (top && top.doScroll) {
				(Function doScrollCheck () {
					If (! JQuery.isReady) {

						tratar {

							// Usa el truco de Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							Top.doScroll ("izquierda");
						} Catch (e) {
							Return window.setTimeout (doScrollCheck, 50);
						}

						// desvincula todos los eventos de dom ready
						despegar();

						// y ejecuta cualquier función de espera
						JQuery.ready ();
					}
				}) ();
			}
		}
	}
	Return readyList.promise (obj);
};

// Arranca la comprobación de DOM ready incluso si el usuario no
JQuery.ready.promise ();




// Soporte: IE <9
// Iteración sobre las propiedades heredadas del objeto antes de su propia
Var i;
Para (i en jQuery (soporte)) {
	descanso;
}
Support.ownFirst = i === "0";

// Nota: la mayoría de las pruebas de soporte se definen en sus respectivos módulos.
// false hasta que se ejecute la prueba
Support.inlineBlockNeedsLayout = false;

// Ejecutar ASAP en caso de que necesitemos establecer body.style.zoom
JQuery (function () {

	// Minificado: var a, b, c, d
	Var val, div, cuerpo, contenedor;

	Body = document.getElementsByTagName ("body") [0];
	If (! Body ||! Body.style) {

		// Devuelve para docs de marcos que no tienen un cuerpo
		regreso;
	}

	// Preparar
	Div = document.createElement ("div");
	Container = document.createElement ("div");
	Container.style.cssText = "posición: absoluta, frontera: 0; ancho: 0; altura: 0; arriba: 0; izquierda: -9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		Var name = "data-" + key.replace (rmultiDash, "- $ 1") .toLowerCase ();

		Data = elem.getAttribute (name);

		If (tipo de datos === "cadena") {
			tratar {
				Data = data === "true"? cierto :
					Datos === "false"? Falso
					Datos === "null"? nulo :

					// Sólo convierte a un número si no cambia la cadena
					+ Datos + "" === datos? + Datos:
					Rbrace.test (datos)? JQuery.parseJSON (datos):
					datos;
			Captura {sustantivo}

			// Asegúrate de que configuramos los datos para que no se cambien más tarde
			JQuery.data (elem, clave, datos);

		} Else {
			Data = undefined;
		}
	}

	Devolver datos;
}

// comprueba un objeto de caché para el vacío
Function isEmptyDataObject (obj) {
	Nombre var;
	Para (nombre en obj) {

		// si el objeto de datos público está vacío, el privado sigue vacío
		If (nombre === "datos" && jQuery.isEmptyObject (obj [name])) {
			continuar;
		}
		If (nombre! == "toJSON") {
			falso retorno;
		}
	}

	Devuelve verdadero;
}

Función internalData (elem, nombre, datos, pvt / * Sólo para uso interno * /) {
	If (! AcceptData (elem)) {
		regreso;
	}

	Var ret, thisCache,
		InternalKey = jQuery.expando,

		// Tenemos que manejar los nodos DOM y los objetos JS de forma diferente porque IE6-7
		// no puede referencias de objeto GC correctamente a través del límite DOM-JS
		IsNode = elem.nodeType,

		// Sólo los nodos DOM necesitan la caché jQuery global; Los datos del objeto JS son
		// conectado directamente al objeto para que el GC pueda ocurrir automáticamente
		Cache = isNode? JQuery.cache: elem,

		// Sólo se define un ID para objetos JS si su caché ya existe permite
		// el código para atajar en la misma ruta que un nodo DOM sin caché
		Id = isNode? Elem [internalKey]: elem [internalKey] && internalKey;

	// Evite hacer más trabajo de lo que necesitamos al tratar de obtener datos
	// objeto que no tiene datos en absoluto
	If ((! Id ||! Cache [id] || (! Pvt &&! Cache [id] .data)) &&
		Data === undefined && typeof nombre === "cadena") {
		regreso;
	}

	si yo d ) {

		// Sólo los nodos DOM necesitan un nuevo identificador único para cada elemento ya que sus datos
		// termina en la caché global
		If (isNode) {
			Id = elem [internalKey] = deletedIds.pop () || JQuery.guid ++;
		} Else {
			Id = internalKey;
		}
	}

	If (! Cache [id]) {

		// Evite exponer metadatos jQuery en objetos JS sin formato cuando el objeto
		// se serializa utilizando JSON.stringify
		Cache [id] = isNode? {}: {ToJSON: jQuery.noop};
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} Else if (support.deleteExpando || cache! = Cache.window) {
		/ * Jshint eqeqeq: true * /
		Eliminar caché [id];

	// Cuando todo falla, indefinido
	} Else {
		Caché [id] = indefinido;
	}
}

JQuery.extend ({
	Caché: {},

	// Los siguientes elementos (sufijo de espacio para evitar colisiones Object.prototype)
	// lanzar excepciones no recurribles si intenta establecer las propiedades de expando
	sin datos: {
		"Applet": true,
		"Embed": true,

		// ... pero objetos Flash (que tienen este classid) * pueden * manejar expandos
		"Objeto": "clsid: D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	HasData: function (elem) {
		Elem = elem.nodeType? jQuery.cache [elem [jQuery.expando]]: elem [jQuery.expando];
		Return! Elem &&! IsEmptyDataObject (elem);
	},

	Datos: function (elem, name, data) {
		Return internalData (elem, nombre, datos);
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// siendo vaciado incorrectamente en ciertas situaciones (# 8070).
			Para (i <l; i ++) {
				Nodo = fragmento;

				If (i! == iNoClone) {
					Node = jQuery.clone (node, true, true);

					// Mantener las referencias a los scripts clonados para su posterior restauración
					If (hasScripts) {

						// Soporte: Android <4.1, PhantomJS <2
						// push.apply (_, arraylike) lanza en el antiguo WebKit
						JQuery.merge (scripts, getAll (nodo, "script"));
					}
				}

				Callback.call (colección [i], nodo, i);
			}

			If (hasScripts) {
				Doc = scripts [scripts.length - 1] .ownerDocument;

				// Reenable scripts
				JQuery.map (scripts, restoreScript);

				// Evaluar scripts ejecutables en la primera inserción de documentos
				Para (i = 0; i <hasScripts; i ++) {
					Node = scripts [i];
					If (rscriptType.test (node.type || "") &&
						! JQuery._data (nodo, "globalEval") &&
						JQuery.contains (doc, node)) {

						If (node.src) {

							// Dependencia opcional AJAX, pero no ejecutará scripts si no está presente
							If (jQuery._evalUrl) {
								JQuery._evalUrl (node.src);
							}
						} Else {
							JQuery.globalEval (
								(Node.text || node.textContent || node.innerHTML || "")
									.replace (rcleanScript, "")
							);
						}
					}
				}
			}

			// Fijar # 11809: evitar fugas de memoria
			Fragment = first = null;
		}
	}

	Colección de devoluciones;
}

Función remove (elem, selector, keepData) {
	Nodo var,
		Elems = selector? JQuery.filter (selector, elem): elem,
		I = 0;

	Para (; (nodo = elems [i])! = Null; i ++) {

		If (! KeepData && node.nodeType === 1) {
			JQuery.cleanData (getAll (nodo));
		}

		If (node.parentNode) {
			If (keepData && jQuery.contains (node.ownerDocument, node)) {
				SetGlobalEval (getAll (nodo, "script"));
			}
			Node.parentNode.removeChild (nodo);
		}
	}

	Elemento de retorno;
}

JQuery.extend ({
	HtmlPrefilter: function (html) {
		Return html.replace (rxhtmlTag, "<$ 1> </ $ 2>");
	},

	Clone: ??function (elem, dataAndEvents, deepDataAndEvents) {
		Var destElements, nodo, clon, i, srcElements,
			InPage = jQuery.contains (elem.ownerDocument, elem);

		If (support.html5Clone || jQuery.isXMLDoc (elem) ||
			! Rnoshimcache.test ("<" + elem.nodeName + ">")) {

			Clone = elem.cloneNode (true);

		// IE <= 8 no clona de forma apropiada los nodos de elementos desconocidos
		} Else {
			FragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		Return domManip (esto, argumentos, function (elem) {
			If (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				Var target = manipulationTarget (esto, elem);
				Target.appendChild (elem);
			}
		});
	},

	Prepend: function () {
		Return domManip (esto, argumentos, function (elem) {
			If (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
				Var target = manipulationTarget (esto, elem);
				Target.insertBefore (elem, target.firstChild);
			}
		});
	},

	Antes: function () {
		Return domManip (esto, argumentos, function (elem) {
			If (this.parentNode) {
				This.parentNode.insertBefore (elem, this);
			}
		});
	},

	Después de: function () {
		Return domManip (esto, argumentos, function (elem) {
			If (this.parentNode) {
				This.parentNode.insertBefore (elem, this.nextSibling);
			}
		});
	},

	Empty: function () {
		Var elem
			I = 0;

		Para (; (elem = este [i])! = Null; i ++) {

			// Eliminar nodos de elemento e impedir fugas de memoria
			If (elem.nodeType === 1) {
				JQuery.cleanData (getAll (elem, false));
			}

			// Eliminar los nodos restantes
			Mientras que (elem.firstChild) {
				Elem.removeChild (elem.firstChild);
			}

			// Si se trata de una selección, asegúrese de que muestra vacío (# 12336)
			// Soporte: IE <9
			If (elem.options && jQuery.nodeName (elem, "select")) {
				Elem.options.length = 0;
			}
		}

		Devolver esto;
	},

	Clone: ??function (dataAndEvents, deepDataAndEvents) {
		DataAndEvents = dataAndEvents == null? False: dataAndEvents;
		DeepDataAndEvents = deepDataAndEvents == null? DataAndEvents: deepDataAndEvents;

		Return this.map (function () {
			Devuelve jQuery.clone (esto, dataAndEvents, deepDataAndEvents);
		});
	},

	Html: function (valor) {
		Retorno de acceso (esto, function (value) {
			Var elem = this [0] || {},
				I = 0,
				L = esta longitud;

			If (value === undefined) {
				Return elem.nodeType === 1?
					Elem.innerHTML.replace (rinlinejQuery, ""):
					Indefinido
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// No tenemos datos almacenados en el elemento,
	// así que utilice el método del "separar" como manera rápida de conseguir librado del elemento
	Elem.detach ();

	Pantalla de retorno;
}

Todos los derechos reservados
 * Trata de determinar el valor de visualización predeterminado de un elemento
 * @param {String} nodeName
 * /
Función defaultDisplay (nodeName) {
	Var doc = documento,
		Display = elemdisplay [nodeName];

	If (! Display) {
		Display = realDisplay (nodeName, doc);

		// Si falla la forma sencilla, lee desde dentro de un iframe
		If (display === "none" ||! Display) {

			// Utilizar el iframe ya creado si es posible
			Iframe = (iframe || jQuery ("<iframe frameborder = '0' width = '0' height = '0' />"))
				.appendTo (doc.documentElement);

			// Siempre escribe un nuevo esqueleto HTML para que Webkit y Firefox no se ahogan en la reutilización
			Doc = (iframe [0] .contentWindow || iframe [0] .contentDocument) .document;

			// Soporte: IE
			Doc.write ();
			Doc.close ();

			Display = realDisplay (nodeName, doc);
			Iframe.detach ();
		}

		// Almacenar la visualización predeterminada correcta
		Elemdisplay [nodeName] = muestra;
	}

	Pantalla de retorno;
}
Var rmargin = (/ ^ margen /);

var rnumnonpx = new RegExp ( "^ (" + pnum + ") (?! px) [az%] + $", "i");

Var swap = función (elem, opciones, callback, args) {
	Var ret, nombre,
		Old = {};

	// Recuerde los valores antiguos, e inserte los nuevos
	Para (nombre en opciones) {
		Old [nombre] = elem.style [nombre];
		Elem.style [nombre] = opciones [nombre];
	}

	Ret = callback.apply (elem, args || []);

	// Revertir los valores antiguos
	Para (nombre en opciones) {
		Elem.style [nombre] = antiguo [nombre];
	}

	Return ret;
};


Var documentElement = document.documentElement;



(Function () {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			Return boxSizingReliableVal;
		},

		PixelMarginRight: function () {

			// Soporte: Android 4.0-4.3
			If (pixelPositionVal == null) {
				ComputeStyleTests ();
			}
			Return pixelMarginRightVal;
		},

		PixelPosition: function () {
			If (pixelPositionVal == null) {
				ComputeStyleTests ();
			}
			Return pixelPositionVal;
		},

		ReliableMarginRight: function () {

			// Soporte: Android 2.3
			If (pixelPositionVal == null) {
				ComputeStyleTests ();
			}
			Return reliableMarginRightVal;
		},

		ReliableMarginLeft: function () {

			// Soporte: IE <= 8 solamente, Android 4.0 - 4.3 solamente, Firefox <= 3 - 37
			If (pixelPositionVal == null) {
				ComputeStyleTests ();
			}
			Return reliableMarginLeftVal;
		}
	});

	Función computeStyleTests () {
		Var contenidos, divStyle,
			DocumentElement = document.documentElement;

		// Preparar
		DocumentElement.appendChild (contenedor);

		Div.style.cssText =

			// Soporte: Android 2.3
			// Proveedor-prefijo de tamaño de caja
			"-webkit-box-sizing: border-box; tamaño de caja: border-box;" +
			"Position: relative; display: block;" +
			"Margen: auto; borde: 1px; relleno: 1px;" +
			"Top: 1%, width: 50%";

		// Soporte: IE <9
		// Asume valores razonables en ausencia de getComputedStyle
		PixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		PixelMarginRightVal = reliableMarginRightVal = true;

		// Buscar getComputedStyle para que este código no se ejecute en IE <9.
		If (window.getComputedStyle) {
			DivStyle = window.getComputedStyle (div);
			PixelPositionVal = (divStyle || {}) .top! == "1%";
			ReliableMarginLeftVal = (divStyle || {}) .marginLeft === "2px";
			BoxSizingReliableVal = (divStyle || {width: "4px"}) .width === "4px";

			// Soporte: Android 4.0 - 4.3 solamente
			// Algunos estilos vuelven con valores porcentuales, aunque no deberían
			Div.style.marginRight = "50%";
			PixelMarginRightVal = (divStyle || {marginRight: "4px"}) .marginRight === "4px";

			// Soporte: Android 2.3 solamente
			// Div con anchura explícita y sin margen-derecha incorrectamente
			// se calcula el margen-derecho basado en el ancho del contenedor (# 3333)
			// WebKit Bug 13343 - getComputedStyle devuelve un valor incorrecto para margin-right
			Contents = div.appendChild (document.createElement ("div"));

			// Restablecer CSS: tamaño de caja; monitor; margen; frontera; relleno
			Contents.style.cssText = div.style.cssText =

				// Soporte: Android 2.3
				// Proveedor-prefijo de tamaño de caja
				"-webkit-box-sizing: content-box; -moz-box-sizing: content-box;" +
				"Box-sizing: content-box; display: block; margin: 0; border: 0; padding: 0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				I = 0;

			If (jQuery.isArray (name)) {
				Styles = getStyles (elem);
				Len = name.length;

				Para (i <len; i ++) {
					Map [nombre [i]] = jQuery.css (elem, nombre [i], false, estilos);
				}

				Return map;
			}

			Valor de retorno == undefined?
				JQuery.style (elem, name, value):
				JQuery.css (elem, nombre);
		}, Nombre, valor, arguments.length> 1);
	},
	Show: function () {
		Return showHide (esto, true);
	},
	Ocultar: function () {
		Return showHide (this);
	},
	Toggle: function (estado) {
		If (tipo de estado === "booleano") {
			Estado de devolución This.show (): this.hide ();
		}

		Return this.each (function () {
			If (isHidden (this)) {
				JQuery (this) .show ();
			} Else {
				JQuery (this) .hide ();
			}
		});
	}
});


Función Tween (elem, opciones, prop, end, easing) {
	Return new Tween.prototype.init (elem, opciones, prop, end, easing);
}
JQuery.Tween = Tween;

Tween.prototype = {
	Constructor: Tween,
	Init: function (elem, options, prop, end, easing, unit) {
		This.elem = elem;
		This.prop = prop;
		This.easing = alivio || JQuery.easing._default;
		This.options = opciones;
		This.start = this.now = this.cur ();
		This.end = end;
		This.unit = unidad || (JQuery.cssNumber [prop]? "": "Px");
	},
	Cur: function () {
		Var hooks = Tween.propHooks [this.prop];

		Return hooks && hooks.get?
			Hooks.get (this):
			Tween.propHooks._default.get (este);
	},
	Run: function (porcentaje) {
		Var aliviado,
			Ganchos = Tween.propHooks [this.prop];

		If (this.options.duration) {
			This.pos = eased = jQuery.easing [this.easing] (
				Porcentaje, this.options.duration * Porcentaje, 0, 1, this.options.duration
			);
		} Else {
			Esto.pos = aliviado = porcentaje;
		}
		This.now = (this.end - this.start) * facilitado + this.start;

		If (this.options.step) {
			This.options.step.call (this.elem, this.now, this);
		}

		If (hooks && hooks.set) {
			Hooks.set (este);
		} Else {
			Tween.propHooks._default.set (este);
		}
		Devolver esto;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_defecto: {
		Get: función (interpolación) {
			Resultado var;

			// Usa una propiedad en el elemento directamente cuando no es un elemento DOM,
			// o cuando no existe una propiedad de estilo que exista.
			If (tween.elem.nodeType! == 1 ||
				Tween.elem [tween.prop]! = Null && tween.elem.style [tween.prop] == null) {
				Return tween.elem [tween.prop];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			Hooks.empty.fire = function () {
				If (! Hooks.unqueued) {
					Oldfire ();
				}
			};
		}
		Hooks.unqueued ++;

		Anim.always (function () {

			// haciendo esto se asegura de que el controlador completo se llamará
			// antes de que se complete
			Anim.always (function () {
				Ganchos
				If (! JQuery.queue (elem, "fx") .length) {
					Hooks.empty.fire ();
				}
			});
		});
	}

	// paso de desbordamiento de altura / anchura
	If (elem.nodeType === 1 && ("height" en accesorios || "width" en props)) {

		// Asegúrese de que nada se escapa
		// Registra todos los 3 atributos de desbordamiento porque IE no
		// cambia el atributo overflow cuando overflowX y
		// overflowY se establecen en el mismo valor
		Opts.overflow = [style.overflow, style.overflowX, style.overflowY];

		// Establece la propiedad de visualización en bloque en línea para altura / ancho
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Cualquier valor no fx nos impide restaurar el valor de visualización original
		} Else {
			Display = undefined;
		}
	}

	If (! JQuery.isEmptyObject (orig)) {
		If (dataShow) {
			If ("hidden" en dataShow) {
				Hidden = dataShow.hidden;
			}
		} Else {
			DataShow = jQuery._data (elem, "fxshow", {});
		}

		// almacena el estado si su alterna - activa .stop (). Toggle () to "reverse"
		Si (conmutar) {
			DataShow.hidden =! Hidden;
		}
		Si (oculto) {
			JQuery (elem) .show ();
		} Else {
			Anim.done (function () {
				JQuery (elem) .hide ();
			});
		}
		Anim.done (function () {
			Var prop;
			JQuery._removeData (elem, "fxshow");
			Para (prop in orig) {
				JQuery.style (elem, prop, orig [prop]);
			}
		});
		Para (prop in orig) {
			Tween = createTween (hidden? DataShow [prop]: 0, prop, anim);

			If (! (Prop en dataShow)) {
				DataShow [prop] = tween.start;
				Si (oculto) {
					Tween.end = tween.start;
					Tween.start = prop === "width" || Prop === "altura"? 1: 0;
				}
			}
		}

	// Si se trata de un noop como .hide (). Hide (), restaura un valor de visualización sobrescrita
	} Else if ((display === "none"? DefaultDisplay (elem.nodeName): display) === "inline") {
		Style.display = display;
	}
}

Función propFilter (accesorios, specialEasing) {
	Var index, nombre, facilitación, valor, ganchos;

	// camelCase, specialEasing y expanda cssHook pass
	Para (índice en accesorios) {
		Nombre = jQuery.camelCase (índice);
		Easing = specialEasing [nombre];
		Valor = apoyos [índice];
		If (jQuery.isArray (value)) {
			Easing = valor [1];
			Valor = apoyos [índice] = valor [0];
		}

		If (index! == name) {
			Apoyos [nombre] = valor;
			Borrar los apoyos [índice];
		}

		Hooks = jQuery.cssHooks [nombre];
		If (hooks && "expand" en hooks) {
			Value = hooks.expand (value);
			Borrar los apoyos [nombre];

			// no bastante $ .extend, esto no sobrescribirá claves ya presentes.
			// también - reusar 'índice' desde arriba porque tenemos el "nombre" correcto
			Para (índice en valor) {
				If (! (Índice en accesorios)) {
					Apoyos [índice] = valor [índice];
					SpecialEasing [índice] = alivio;
				}
			}
		} Else {
			SpecialEasing [nombre] = alivio;
		}
	}
}

Función Animación (elem, propiedades, opciones) {
	Resultado var,
		detenido,
		Índice = 0,
		Length = Animation.prefilters.length,
		Deferred = jQuery.Deferred (). Always (function () {

			// no coincide con elem en el: animated selector
			Eliminar tick.elem;
		}),
		Tick ??= function () {
			Si detenido
				falso retorno;
			}
			Var currentTime = fxNow || CreateFxNow (),
				Restante = Math.max (0, animation.startTime + animation.duration - currentTime),

				// Soporte: Android 2.3
				// El fallo del crash arcaico no nos permitirá usar `1 - (0.5 || 0)` (# 12497)
				Temp = restante / animation.duration || 0,
				Porcentaje = 1 - temp,
				Índice = 0,
				Length = animation.tweens.length;

			Para (; índice <longitud; índice ++) {
				Animation.tweens [index] .run (porcentaje);
			}

			Deferred.notifyWith (elem, [animation, percent, remaining]);

			If (porcentaje <1 && length) {
				Devolver el resto;
			} Else {
				Deferred.resolveWith (elem, [animación]);
				falso retorno;
			}
		},
		Animation = deferred.promise ({
			Elem: elem,
			Props: jQuery.extend ({}, propiedades),
			Opts: jQuery.extend (true, {
				SpecialEasing: {},
				Easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));