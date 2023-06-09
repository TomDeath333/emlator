(function(b) {
    function a(b, d) {
        if ({}.hasOwnProperty.call(a.cache, b)) return a.cache[b];
        var e = a.resolve(b);
        if (!e) throw new Error('Failed to resolve module ' + b);
        var c = {
            id: b,
            require: a,
            filename: b,
            exports: {},
            loaded: !1,
            parent: d,
            children: []
        };
        d && d.children.push(c);
        var f = b.slice(0, b.lastIndexOf('/') + 1);
        return a.cache[b] = c.exports, e.call(c.exports, c, c.exports, f, b), c.loaded = !0, a.cache[b] = c.exports
    }
    a.modules = {}, a.cache = {}, a.resolve = function(b) {
        return {}.hasOwnProperty.call(a.modules, b) ? a.modules[b] : void 0
    }, a.define = function(b, c) {
        a.modules[b] = c
    };
    var c = function(a) {
        return a = '/', {
            title: 'browser',
            version: 'v0.10.26',
            browser: !0,
            env: {},
            argv: [],
            nextTick: b.setImmediate || function(a) {
                setTimeout(a, 0)
            },
            cwd: function() {
                return a
            },
            chdir: function(b) {
                a = b
            }
        }
    }();
    a.define('/tools/entry-point.js', function(c, d, e, f) {
        ! function() {
            'use strict';
            b.escodegen = a('/escodegen.js', c), escodegen.browser = !0
        }()
    }), a.define('/escodegen.js', function(d, c, e, f) {
        ! function(e, f, Z, C, W, q, A, m, x, v, K, S, G, M, k, h, J, O, D, N, n, I, w, U, _) {
            'use strict';

            function Q() {
                return {
                    indent: null,
                    base: null,
                    parse: null,
                    comment: !1,
                    format: {
                        indent: {
                            style: '    ',
                            base: 0,
                            adjustMultilineComment: !1
                        },
                        newline: '\n',
                        space: ' ',
                        json: !1,
                        renumber: !1,
                        hexadecimal: !1,
                        quotes: 'single',
                        escapeless: !1,
                        compact: !1,
                        parentheses: !0,
                        semicolons: !0,
                        safeConcatenation: !1
                    },
                    moz: {
                        comprehensionExpressionStartsWithAssignment: !1,
                        starlessGenerator: !1,
                        parenthesizedComprehensionBlock: !1
                    },
                    sourceMap: null,
                    sourceMapRoot: null,
                    sourceMapWithCode: !1,
                    directive: !1,
                    raw: !0,
                    verbatim: null
                }
            }

            function H(b, a) {
                var c = '';
                for (a |= 0; a > 0; a >>>= 1, b += b) a & 1 && (c += b);
                return c
            }

            function a9(a) {
                return /[\r\n]/g.test(a)
            }

            function r(b) {
                var a = b.length;
                return a && q.code.isLineTerminator(b.charCodeAt(a - 1))
            }

            function F(b, d) {
                function e(a) {
                    return typeof a === 'object' && a instanceof Object && !(a instanceof RegExp)
                }
                var a, c;
                for (a in d) d.hasOwnProperty(a) && (c = d[a], e(c) ? e(b[a]) ? F(b[a], c) : b[a] = F({}, c) : b[a] = c);
                return b
            }

            function $(c) {
                var b, e, a, f, d;
                if (c !== c) throw new Error('Numeric literal whose value is NaN');
                if (c < 0 || c === 0 && 1 / c < 0) throw new Error('Numeric literal whose value is negative');
                if (c === 1 / 0) return v ? 'null' : K ? '1e400' : '1e+400';
                if (b = '' + c, !K || b.length < 3) return b;
                e = b.indexOf('.'), !v && b.charCodeAt(0) === 48 && e === 1 && (e = 0, b = b.slice(1)), a = b, b = b.replace('e+', 'e'), f = 0, (d = a.indexOf('e')) > 0 && (f = +a.slice(d + 1), a = a.slice(0, d)), e >= 0 && (f -= a.length - e - 1, a = +(a.slice(0, e) + a.slice(e + 1)) + ''), d = 0;
                while (a.charCodeAt(a.length + d - 1) === 48) --d;
                return d !== 0 && (f -= d, a = a.slice(0, d)), f !== 0 && (a += 'e' + f), (a.length < b.length || S && c > 1e12 && Math.floor(c) === c && (a = '0x' + c.toString(16)).length < b.length) && +a === c && (b = a), b
            }

            function Y(a, b) {
                return (a & -2) === 8232 ? (b ? 'u' : '\\u') + (a === 8232 ? '2028' : '2029') : a === 10 || a === 13 ? (b ? '' : '\\') + (a === 10 ? 'n' : 'r') : String.fromCharCode(a)
            }

            function a1(d) {
                var g, a, h, e, i, b, f, c;
                if (a = d.toString(), d.source) {
                    if (g = a.match(/\/([^/]*)$/), !g) return a;
                    for (h = g[1], a = '', f = !1, c = !1, e = 0, i = d.source.length; e < i; ++e) b = d.source.charCodeAt(e), c ? (a += Y(b, c), c = !1) : (f ? b === 93 && (f = !1) : b === 47 ? a += '\\' : b === 91 && (f = !0), a += Y(b, c), c = b === 92);
                    return '/' + a + '/' + h
                }
                return a
            }

            function a3(b, d) {
                var c, a = '\\';
                switch (b) {
                    case 8:
                        a += 'b';
                        break;
                    case 12:
                        a += 'f';
                        break;
                    case 9:
                        a += 't';
                        break;
                    default:
                        c = b.toString(16).toUpperCase();
                        v || b > 255 ? a += 'u' + '0000'.slice(c.length) + c : b === 0 && !q.code.isDecimalDigit(d) ? a += '0' : b === 11 ? a += 'x0B' : a += 'x' + '00'.slice(c.length) + c;
                        break
                }
                return a
            }

            function a4(b) {
                var a = '\\';
                switch (b) {
                    case 92:
                        a += '\\';
                        break;
                    case 10:
                        a += 'n';
                        break;
                    case 13:
                        a += 'r';
                        break;
                    case 8232:
                        a += 'u2028';
                        break;
                    case 8233:
                        a += 'u2029';
                        break;
                    default:
                        throw new Error('Incorrectly classified character')
                }
                return a
            }

            function a7(d) {
                var a, e, c, b;
                for (b = G === 'double' ? '"' : "'", a = 0, e = d.length; a < e; ++a) {
                    if (c = d.charCodeAt(a), c === 39) {
                        b = '"';
                        break
                    }
                    if (c === 34) {
                        b = "'";
                        break
                    }
                    c === 92 && ++a
                }
                return b + d + b
            }

            function a8(d) {
                var b = '',
                    c, g, a, h = 0,
                    i = 0,
                    e, f;
                for (c = 0, g = d.length; c < g; ++c) {
                    if (a = d.charCodeAt(c), a === 39) ++h;
                    else if (a === 34) ++i;
                    else if (a === 47 && v) b += '\\';
                    else if (q.code.isLineTerminator(a) || a === 92) {
                        b += a4(a);
                        continue
                    } else if (v && a < 32 || !(v || M || a >= 32 && a <= 126)) {
                        b += a3(a, d.charCodeAt(c + 1));
                        continue
                    }
                    b += String.fromCharCode(a)
                }
                if (e = !(G === 'double' || G === 'auto' && i < h), f = e ? "'" : '"', !(e ? h : i)) return f + b + f;
                for (d = b, b = f, c = 0, g = d.length; c < g; ++c) a = d.charCodeAt(c), (a === 39 && e || a === 34 && !e) && (b += '\\'), b += String.fromCharCode(a);
                return b + f
            }

            function R(d) {
                var a, e, b, c = '';
                for (a = 0, e = d.length; a < e; ++a) b = d[a], c += A(b) ? R(b) : b;
                return c
            }

            function j(b, a) {
                if (!w) return A(b) ? R(b) : b;
                if (a == null)
                    if (b instanceof C) return b;
                    else a = {};
                return a.loc == null ? new C(null, null, w, b, a.name || null) : new C(a.loc.start.line, a.loc.start.column, w === !0 ? a.loc.source || null : w, b, a.name || null)
            }

            function p() {
                return h ? h : ' '
            }

            function i(c, d) {
                var e = j(c).toString(),
                    f = j(d).toString(),
                    a = e.charCodeAt(e.length - 1),
                    b = f.charCodeAt(0);
                return (a === 43 || a === 45) && a === b || q.code.isIdentifierPart(a) && q.code.isIdentifierPart(b) || a === 47 && b === 105 ? [c, p(), d] : q.code.isWhiteSpace(a) || q.code.isLineTerminator(a) || q.code.isWhiteSpace(b) || q.code.isLineTerminator(b) ? [c, d] : [c, h, d]
            }

            function u(a) {
                return [m, a]
            }

            function o(c) {
                var a, b;
                return a = m, m += x, b = c.call(this, m), m = a, b
            }

            function a5(b) {
                var a;
                for (a = b.length - 1; a >= 0; --a)
                    if (q.code.isLineTerminator(b.charCodeAt(a))) break;
                return b.length - 1 - a
            }

            function a6(k, i) {
                var b, a, e, g, d, c, f, h;
                for (b = k.split(/\r\n|[\r\n]/), c = Number.MAX_VALUE, a = 1, e = b.length; a < e; ++a) {
                    g = b[a], d = 0;
                    while (d < g.length && q.code.isWhiteSpace(g.charCodeAt(d))) ++d;
                    c > d && (c = d)
                }
                for (i !== void 0 ? (f = m, b[1][c] === '*' && (i += ' '), m = i) : (c & 1 && --c, f = m), a = 1, e = b.length; a < e; ++a) h = j(u(b[a].slice(c))), b[a] = w ? h.join('') : h;
                return m = f, b.join('\n')
            }

            function E(a, b) {
                return a.type === 'Line' ? r(a.value) ? '//' + a.value : '//' + a.value + '\n' : n.format.indent.adjustMultilineComment && /[\n\r]/.test(a.value) ? a6('/*' + a.value + '*/', b) : '/*' + a.value + '*/'
            }

            function P(b, a) {
                var c, f, d, i, k, h, g;
                if (b.leadingComments && b.leadingComments.length > 0) {
                    for (i = a, d = b.leadingComments[0], a = [], D && b.type === e.Program && b.body.length === 0 && a.push('\n'), a.push(E(d)), r(j(a).toString()) || a.push('\n'), c = 1, f = b.leadingComments.length; c < f; ++c) d = b.leadingComments[c], g = [E(d)], r(j(g).toString()) || g.push('\n'), a.push(u(g));
                    a.push(u(i))
                }
                if (b.trailingComments)
                    for (k = !r(j(a).toString()), h = H(' ', a5(j([m, a, x]).toString())), c = 0, f = b.trailingComments.length; c < f; ++c) d = b.trailingComments[c], k ? (c === 0 ? a = [a, x] : a = [a, h], a.push(E(d, h))) : a = [a, u(E(d))], c !== f - 1 && !r(j(a).toString()) && (a = [a, '\n']);
                return a
            }

            function t(a, b, c) {
                return b < c ? ['(', a, ')'] : a
            }

            function s(a, f, c) {
                var d, b;
                return b = !n.comment || !a.leadingComments, a.type === e.BlockStatement && b ? [h, l(a, {
                    functionBody: c
                })] : a.type === e.EmptyStatement && b ? ';' : (o(function() {
                    d = [k, u(l(a, {
                        semicolonOptional: f,
                        functionBody: c
                    }))]
                }), d)
            }

            function y(c, a) {
                var b = r(j(a).toString());
                return c.type === e.BlockStatement && !(n.comment && c.leadingComments) && !b ? [a, h] : b ? [a, m] : [a, k, m]
            }

            function T(d) {
                var a, c, b;
                for (b = d.split(/\r\n|\n/), a = 1, c = b.length; a < c; a++) b[a] = k + m + b[a];
                return b
            }

            function a2(c, d) {
                var a, b, e;
                return a = c[n.verbatim], typeof a === 'string' ? b = t(T(a), f.Sequence, d.precedence) : (b = T(a.content), e = a.precedence != null ? a.precedence : f.Sequence, b = t(b, e, d.precedence)), j(b, c)
            }

            function B(a) {
                return j(a.name, a)
            }

            function V(a, c) {
                var b;
                return a.type === e.Identifier ? b = B(a) : b = g(a, {
                    precedence: c.precedence,
                    allowIn: c.allowIn,
                    allowCall: !0
                }), b
            }

            function z(b) {
                var a, c, i, d, j;
                if (j = b.type === e.ArrowFunctionExpression, j && b.params.length === 1 && b.params[0].type === e.Identifier) a = [B(b.params[0])];
                else {
                    for (a = ['('], c = 0, i = b.params.length; c < i; ++c) a.push(V(b.params[c], {
                        precedence: f.Assignment,
                        allowIn: !0
                    })), c + 1 < i && a.push(',' + h);
                    a.push(')')
                }
                return j && (a.push(h), a.push('=>')), b.expression ? (a.push(h), d = g(b.body, {
                    precedence: f.Assignment,
                    allowIn: !0,
                    allowCall: !0
                }), d.toString().charAt(0) === '{' && (d = ['(', d, ')']), a.push(d)) : a.push(s(b.body, !1, !0)), a
            }

            function X(c, b, d) {
                var a = ['for' + h + '('];
                return o(function() {
                    b.left.type === e.VariableDeclaration ? o(function() {
                        a.push(b.left.kind + p()), a.push(l(b.left.declarations[0], {
                            allowIn: !1
                        }))
                    }) : a.push(g(b.left, {
                        precedence: f.Call,
                        allowIn: !0,
                        allowCall: !0
                    })), a = i(a, c), a = [i(a, g(b.right, {
                        precedence: f.Sequence,
                        allowIn: !0,
                        allowCall: !0
                    })), ')']
                }), a.push(s(b.body, d)), a
            }

            function L(a) {
                var b;
                if (a.hasOwnProperty('raw') && I && n.raw) try {
                    if (b = I(a.raw).body[0].expression, b.type === e.Literal && b.value === a.value) return a.raw
                } catch (a) {}
                return a.value === null ? 'null' : typeof a.value === 'string' ? a8(a.value) : typeof a.value === 'number' ? $(a.value) : typeof a.value === 'boolean' ? a.value ? 'true' : 'false' : a1(a.value)
            }

            function g(b, x) {
                var a, u, D, A, d, s, c, v, C, y, G, w, E, H, F, I;
                if (u = x.precedence, w = x.allowIn, E = x.allowCall, D = b.type || x.type, n.verbatim && b.hasOwnProperty(n.verbatim)) return a2(b, x);
                switch (D) {
                    case e.SequenceExpression:
                        a = [];
                        w |= f.Sequence < u;
                        for (d = 0, s = b.expressions.length; d < s; ++d) a.push(g(b.expressions[d], {
                            precedence: f.Assignment,
                            allowIn: w,
                            allowCall: !0
                        })), d + 1 < s && a.push(',' + h);
                        a = t(a, f.Sequence, u);
                        break;
                    case e.AssignmentExpression:
                        w |= f.Assignment < u;
                        a = t([g(b.left, {
                            precedence: f.Call,
                            allowIn: w,
                            allowCall: !0
                        }), h + b.operator + h, g(b.right, {
                            precedence: f.Assignment,
                            allowIn: w,
                            allowCall: !0
                        })], f.Assignment, u);
                        break;
                    case e.ArrowFunctionExpression:
                        w |= f.ArrowFunction < u;
                        a = t(z(b), f.ArrowFunction, u);
                        break;
                    case e.ConditionalExpression:
                        w |= f.Conditional < u;
                        a = t([g(b.test, {
                            precedence: f.LogicalOR,
                            allowIn: w,
                            allowCall: !0
                        }), h + '?' + h, g(b.consequent, {
                            precedence: f.Assignment,
                            allowIn: w,
                            allowCall: !0
                        }), h + ':' + h, g(b.alternate, {
                            precedence: f.Assignment,
                            allowIn: w,
                            allowCall: !0
                        })], f.Conditional, u);
                        break;
                    case e.LogicalExpression:
                    case e.BinaryExpression:
                        A = Z[b.operator];
                        w |= A < u;
                        c = g(b.left, {
                            precedence: A,
                            allowIn: w,
                            allowCall: !0
                        });
                        y = c.toString();
                        y.charCodeAt(y.length - 1) === 47 && q.code.isIdentifierPart(b.operator.charCodeAt(0)) ? a = [c, p(), b.operator] : a = i(c, b.operator);
                        c = g(b.right, {
                            precedence: A + 1,
                            allowIn: w,
                            allowCall: !0
                        });
                        b.operator === '/' && c.toString().charAt(0) === '/' || b.operator.slice(-1) === '<' && c.toString().slice(0, 3) === '!--' ? (a.push(p()), a.push(c)) : a = i(a, c);
                        b.operator === 'in' && !w ? a = ['(', a, ')'] : a = t(a, A, u);
                        break;
                    case e.CallExpression:
                        a = [g(b.callee, {
                            precedence: f.Call,
                            allowIn: !0,
                            allowCall: !0,
                            allowUnparenthesizedNew: !1
                        })];
                        a.push('(');
                        for (d = 0, s = b['arguments'].length; d < s; ++d) a.push(g(b['arguments'][d], {
                            precedence: f.Assignment,
                            allowIn: !0,
                            allowCall: !0
                        })), d + 1 < s && a.push(',' + h);
                        a.push(')');
                        E ? a = t(a, f.Call, u) : a = ['(', a, ')'];
                        break;
                    case e.NewExpression:
                        s = b['arguments'].length;
                        H = x.allowUnparenthesizedNew === undefined || x.allowUnparenthesizedNew;
                        a = i('new', g(b.callee, {
                            precedence: f.New,
                            allowIn: !0,
                            allowCall: !1,
                            allowUnparenthesizedNew: H && !J && s === 0
                        }));
                        if (!H || J || s > 0) {
                            for (a.push('('), d = 0; d < s; ++d) a.push(g(b['arguments'][d], {
                                precedence: f.Assignment,
                                allowIn: !0,
                                allowCall: !0
                            })), d + 1 < s && a.push(',' + h);
                            a.push(')')
                        }
                        a = t(a, f.New, u);
                        break;
                    case e.MemberExpression:
                        a = [g(b.object, {
                            precedence: f.Call,
                            allowIn: !0,
                            allowCall: E,
                            allowUnparenthesizedNew: !1
                        })];
                        b.computed ? (a.push('['), a.push(g(b.property, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: E
                        })), a.push(']')) : (b.object.type === e.Literal && typeof b.object.value === 'number' && (c = j(a).toString(), c.indexOf('.') < 0 && !/[eExX]/.test(c) && q.code.isDecimalDigit(c.charCodeAt(c.length - 1)) && !(c.length >= 2 && c.charCodeAt(0) === 48) && a.push('.')), a.push('.'), a.push(B(b.property)));
                        a = t(a, f.Member, u);
                        break;
                    case e.UnaryExpression:
                        c = g(b.argument, {
                            precedence: f.Unary,
                            allowIn: !0,
                            allowCall: !0
                        });
                        h === '' ? a = i(b.operator, c) : (a = [b.operator], b.operator.length > 2 ? a = i(a, c) : (y = j(a).toString(), C = y.charCodeAt(y.length - 1), G = c.toString().charCodeAt(0), (C === 43 || C === 45) && C === G || q.code.isIdentifierPart(C) && q.code.isIdentifierPart(G) ? (a.push(p()), a.push(c)) : a.push(c)));
                        a = t(a, f.Unary, u);
                        break;
                    case e.YieldExpression:
                        b.delegate ? a = 'yield*' : a = 'yield';
                        b.argument && (a = i(a, g(b.argument, {
                            precedence: f.Yield,
                            allowIn: !0,
                            allowCall: !0
                        })));
                        a = t(a, f.Yield, u);
                        break;
                    case e.UpdateExpression:
                        b.prefix ? a = t([b.operator, g(b.argument, {
                            precedence: f.Unary,
                            allowIn: !0,
                            allowCall: !0
                        })], f.Unary, u) : a = t([g(b.argument, {
                            precedence: f.Postfix,
                            allowIn: !0,
                            allowCall: !0
                        }), b.operator], f.Postfix, u);
                        break;
                    case e.FunctionExpression:
                        I = b.generator && !n.moz.starlessGenerator;
                        a = I ? 'function*' : 'function';
                        b.id ? a = [a, I ? h : p(), B(b.id), z(b)] : a = [a + h, z(b)];
                        break;
                    case e.ArrayPattern:
                    case e.ArrayExpression:
                        if (!b.elements.length) {
                            a = '[]';
                            break
                        }
                        v = b.elements.length > 1;
                        a = ['[', v ? k : ''];
                        o(function(c) {
                            for (d = 0, s = b.elements.length; d < s; ++d) b.elements[d] ? (a.push(v ? c : ''), a.push(g(b.elements[d], {
                                precedence: f.Assignment,
                                allowIn: !0,
                                allowCall: !0
                            }))) : (v && a.push(c), d + 1 === s && a.push(',')), d + 1 < s && a.push(',' + (v ? k : h))
                        });
                        v && !r(j(a).toString()) && a.push(k);
                        a.push(v ? m : '');
                        a.push(']');
                        break;
                    case e.Property:
                        b.kind === 'get' || b.kind === 'set' ? a = [b.kind, p(), g(b.key, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        }), z(b.value)] : b.shorthand ? a = g(b.key, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        }) : b.method ? (a = [], b.value.generator && a.push('*'), a.push(g(b.key, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        })), a.push(z(b.value))) : a = [g(b.key, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        }), ':' + h, g(b.value, {
                            precedence: f.Assignment,
                            allowIn: !0,
                            allowCall: !0
                        })];
                        break;
                    case e.ObjectExpression:
                        if (!b.properties.length) {
                            a = '{}';
                            break
                        }
                        v = b.properties.length > 1;
                        o(function() {
                            c = g(b.properties[0], {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0,
                                type: e.Property
                            })
                        });
                        if (!(v || a9(j(c).toString()))) {
                            a = ['{', h, c, h, '}'];
                            break
                        }
                        o(function(h) {
                            if (a = ['{', k, h, c], v)
                                for (a.push(',' + k), d = 1, s = b.properties.length; d < s; ++d) a.push(h), a.push(g(b.properties[d], {
                                    precedence: f.Sequence,
                                    allowIn: !0,
                                    allowCall: !0,
                                    type: e.Property
                                })), d + 1 < s && a.push(',' + k)
                        });
                        r(j(a).toString()) || a.push(k);
                        a.push(m);
                        a.push('}');
                        break;
                    case e.ObjectPattern:
                        if (!b.properties.length) {
                            a = '{}';
                            break
                        }
                        v = !1;
                        if (b.properties.length === 1) F = b.properties[0], F.value.type !== e.Identifier && (v = !0);
                        else
                            for (d = 0, s = b.properties.length; d < s; ++d)
                                if (F = b.properties[d], !F.shorthand) {
                                    v = !0;
                                    break
                                }
                        a = ['{', v ? k : ''];
                        o(function(c) {
                            for (d = 0, s = b.properties.length; d < s; ++d) a.push(v ? c : ''), a.push(g(b.properties[d], {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            })), d + 1 < s && a.push(',' + (v ? k : h))
                        });
                        v && !r(j(a).toString()) && a.push(k);
                        a.push(v ? m : '');
                        a.push('}');
                        break;
                    case e.ThisExpression:
                        a = 'this';
                        break;
                    case e.Identifier:
                        a = B(b);
                        break;
                    case e.Literal:
                        a = L(b);
                        break;
                    case e.GeneratorExpression:
                    case e.ComprehensionExpression:
                        a = D === e.GeneratorExpression ? ['('] : ['['];
                        n.moz.comprehensionExpressionStartsWithAssignment && (c = g(b.body, {
                            precedence: f.Assignment,
                            allowIn: !0,
                            allowCall: !0
                        }), a.push(c));
                        b.blocks && o(function() {
                            for (d = 0, s = b.blocks.length; d < s; ++d) c = g(b.blocks[d], {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), d > 0 || n.moz.comprehensionExpressionStartsWithAssignment ? a = i(a, c) : a.push(c)
                        });
                        b.filter && (a = i(a, 'if' + h), c = g(b.filter, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        }), n.moz.parenthesizedComprehensionBlock ? a = i(a, ['(', c, ')']) : a = i(a, c));
                        n.moz.comprehensionExpressionStartsWithAssignment || (c = g(b.body, {
                            precedence: f.Assignment,
                            allowIn: !0,
                            allowCall: !0
                        }), a = i(a, c));
                        a.push(D === e.GeneratorExpression ? ')' : ']');
                        break;
                    case e.ComprehensionBlock:
                        b.left.type === e.VariableDeclaration ? c = [b.left.kind, p(), l(b.left.declarations[0], {
                            allowIn: !1
                        })] : c = g(b.left, {
                            precedence: f.Call,
                            allowIn: !0,
                            allowCall: !0
                        });
                        c = i(c, b.of ? 'of' : 'in');
                        c = i(c, g(b.right, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        }));
                        n.moz.parenthesizedComprehensionBlock ? a = ['for' + h + '(', c, ')'] : a = i('for' + h, c);
                        break;
                    default:
                        throw new Error('Unknown expression type: ' + b.type)
                }
                return n.comment && (a = P(b, a)), j(a, b)
            }

            function l(b, E) {
                var c, d, a, C, x, v, H, F, t, q, G;
                v = !0, q = ';', H = !1, F = !1, E && (v = E.allowIn === undefined || E.allowIn, !O && E.semicolonOptional === !0 && (q = ''), H = E.functionBody, F = E.directiveContext);
                switch (b.type) {
                    case e.BlockStatement:
                        a = ['{', k];
                        o(function() {
                            for (c = 0, d = b.body.length; c < d; ++c) t = u(l(b.body[c], {
                                semicolonOptional: c === d - 1,
                                directiveContext: H
                            })), a.push(t), r(j(t).toString()) || a.push(k)
                        });
                        a.push(u('}'));
                        break;
                    case e.BreakStatement:
                        b.label ? a = 'break ' + b.label.name + q : a = 'break' + q;
                        break;
                    case e.ContinueStatement:
                        b.label ? a = 'continue ' + b.label.name + q : a = 'continue' + q;
                        break;
                    case e.DirectiveStatement:
                        n.raw && b.raw ? a = b.raw + q : a = a7(b.directive) + q;
                        break;
                    case e.DoWhileStatement:
                        a = i('do', s(b.body));
                        a = y(b.body, a);
                        a = i(a, ['while' + h + '(', g(b.test, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        }), ')' + q]);
                        break;
                    case e.CatchClause:
                        o(function() {
                            var c;
                            a = ['catch' + h + '(', g(b.param, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), ')'], b.guard && (c = g(b.guard, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), a.splice(2, 0, ' if ', c))
                        });
                        a.push(s(b.body));
                        break;
                    case e.DebuggerStatement:
                        a = 'debugger' + q;
                        break;
                    case e.EmptyStatement:
                        a = ';';
                        break;
                    case e.ExportDeclaration:
                        a = 'export ';
                        if (b.declaration) {
                            a = [a, l(b.declaration, {
                                semicolonOptional: q === ''
                            })];
                            break
                        }
                        break;
                    case e.ExpressionStatement:
                        a = [g(b.expression, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        })];
                        t = j(a).toString();
                        t.charAt(0) === '{' || t.slice(0, 8) === 'function' && '* ('.indexOf(t.charAt(8)) >= 0 || N && F && b.expression.type === e.Literal && typeof b.expression.value === 'string' ? a = ['(', a, ')' + q] : a.push(q);
                        break;
                    case e.ImportDeclaration:
                        b.specifiers.length === 0 ? a = ['import', h, L(b.source)] : (b.kind === 'default' ? a = ['import', p(), b.specifiers[0].id.name, p()] : (a = ['import', h, '{'], b.specifiers.length === 1 ? (x = b.specifiers[0], a.push(h + x.id.name), x.name && a.push(p() + 'as' + p() + x.name.name), a.push(h + '}' + h)) : (o(function(e) {
                            var c, d;
                            for (a.push(k), c = 0, d = b.specifiers.length; c < d; ++c) x = b.specifiers[c], a.push(e + x.id.name), x.name && a.push(p() + 'as' + p() + x.name.name), c + 1 < d && a.push(',' + k)
                        }), r(j(a).toString()) || a.push(k), a.push(m + '}' + h))), a.push('from' + h), a.push(L(b.source)));
                        a.push(q);
                        break;
                    case e.VariableDeclarator:
                        b.init ? a = [g(b.id, {
                            precedence: f.Assignment,
                            allowIn: v,
                            allowCall: !0
                        }), h, '=', h, g(b.init, {
                            precedence: f.Assignment,
                            allowIn: v,
                            allowCall: !0
                        })] : a = V(b.id, {
                            precedence: f.Assignment,
                            allowIn: v
                        });
                        break;
                    case e.VariableDeclaration:
                        a = [b.kind];
                        b.declarations.length === 1 && b.declarations[0].init && b.declarations[0].init.type === e.FunctionExpression ? (a.push(p()), a.push(l(b.declarations[0], {
                            allowIn: v
                        }))) : o(function() {
                            for (C = b.declarations[0], n.comment && C.leadingComments ? (a.push('\n'), a.push(u(l(C, {
                                    allowIn: v
                                })))) : (a.push(p()), a.push(l(C, {
                                    allowIn: v
                                }))), c = 1, d = b.declarations.length; c < d; ++c) C = b.declarations[c], n.comment && C.leadingComments ? (a.push(',' + k), a.push(u(l(C, {
                                allowIn: v
                            })))) : (a.push(',' + h), a.push(l(C, {
                                allowIn: v
                            })))
                        });
                        a.push(q);
                        break;
                    case e.ThrowStatement:
                        a = [i('throw', g(b.argument, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        })), q];
                        break;
                    case e.TryStatement:
                        a = ['try', s(b.block)];
                        a = y(b.block, a);
                        if (b.handlers)
                            for (c = 0, d = b.handlers.length; c < d; ++c) a = i(a, l(b.handlers[c])), (b.finalizer || c + 1 !== d) && (a = y(b.handlers[c].body, a));
                        else {
                            for (b.guardedHandlers = b.guardedHandlers || [], c = 0, d = b.guardedHandlers.length; c < d; ++c) a = i(a, l(b.guardedHandlers[c])), (b.finalizer || c + 1 !== d) && (a = y(b.guardedHandlers[c].body, a));
                            if (b.handler)
                                if (A(b.handler))
                                    for (c = 0, d = b.handler.length; c < d; ++c) a = i(a, l(b.handler[c])), (b.finalizer || c + 1 !== d) && (a = y(b.handler[c].body, a));
                                else a = i(a, l(b.handler)), b.finalizer && (a = y(b.handler.body, a))
                        }
                        b.finalizer && (a = i(a, ['finally', s(b.finalizer)]));
                        break;
                    case e.SwitchStatement:
                        o(function() {
                            a = ['switch' + h + '(', g(b.discriminant, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), ')' + h + '{' + k]
                        });
                        if (b.cases)
                            for (c = 0, d = b.cases.length; c < d; ++c) t = u(l(b.cases[c], {
                                semicolonOptional: c === d - 1
                            })), a.push(t), r(j(t).toString()) || a.push(k);
                        a.push(u('}'));
                        break;
                    case e.SwitchCase:
                        o(function() {
                            for (b.test ? a = [i('case', g(b.test, {
                                    precedence: f.Sequence,
                                    allowIn: !0,
                                    allowCall: !0
                                })), ':'] : a = ['default:'], c = 0, d = b.consequent.length, d && b.consequent[0].type === e.BlockStatement && (t = s(b.consequent[0]), a.push(t), c = 1), c !== d && !r(j(a).toString()) && a.push(k); c < d; ++c) t = u(l(b.consequent[c], {
                                semicolonOptional: c === d - 1 && q === ''
                            })), a.push(t), c + 1 !== d && !r(j(t).toString()) && a.push(k)
                        });
                        break;
                    case e.IfStatement:
                        o(function() {
                            a = ['if' + h + '(', g(b.test, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), ')']
                        });
                        b.alternate ? (a.push(s(b.consequent)), a = y(b.consequent, a), b.alternate.type === e.IfStatement ? a = i(a, ['else ', l(b.alternate, {
                            semicolonOptional: q === ''
                        })]) : a = i(a, i('else', s(b.alternate, q === '')))) : a.push(s(b.consequent, q === ''));
                        break;
                    case e.ForStatement:
                        o(function() {
                            a = ['for' + h + '('], b.init ? b.init.type === e.VariableDeclaration ? a.push(l(b.init, {
                                allowIn: !1
                            })) : (a.push(g(b.init, {
                                precedence: f.Sequence,
                                allowIn: !1,
                                allowCall: !0
                            })), a.push(';')) : a.push(';'), b.test ? (a.push(h), a.push(g(b.test, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            })), a.push(';')) : a.push(';'), b.update ? (a.push(h), a.push(g(b.update, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            })), a.push(')')) : a.push(')')
                        });
                        a.push(s(b.body, q === ''));
                        break;
                    case e.ForInStatement:
                        a = X('in', b, q === '');
                        break;
                    case e.ForOfStatement:
                        a = X('of', b, q === '');
                        break;
                    case e.LabeledStatement:
                        a = [b.label.name + ':', s(b.body, q === '')];
                        break;
                    case e.Program:
                        d = b.body.length;
                        a = [D && d > 0 ? '\n' : ''];
                        for (c = 0; c < d; ++c) t = u(l(b.body[c], {
                            semicolonOptional: !D && c === d - 1,
                            directiveContext: !0
                        })), a.push(t), c + 1 < d && !r(j(t).toString()) && a.push(k);
                        break;
                    case e.FunctionDeclaration:
                        G = b.generator && !n.moz.starlessGenerator;
                        a = [G ? 'function*' : 'function', G ? h : p(), B(b.id), z(b)];
                        break;
                    case e.ReturnStatement:
                        b.argument ? a = [i('return', g(b.argument, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        })), q] : a = ['return' + q];
                        break;
                    case e.WhileStatement:
                        o(function() {
                            a = ['while' + h + '(', g(b.test, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), ')']
                        });
                        a.push(s(b.body, q === ''));
                        break;
                    case e.WithStatement:
                        o(function() {
                            a = ['with' + h + '(', g(b.object, {
                                precedence: f.Sequence,
                                allowIn: !0,
                                allowCall: !0
                            }), ')']
                        });
                        a.push(s(b.body, q === ''));
                        break;
                    default:
                        throw new Error('Unknown statement type: ' + b.type)
                }
                return n.comment && (a = P(b, a)), t = j(a).toString(), b.type === e.Program && !D && k === '' && t.charAt(t.length - 1) === '\n' && (a = w ? j(a).replaceRight(/\s+$/, '') : t.replace(/\s+$/, '')), j(a, b)
            }

            function a0(p, i) {
                var o = Q(),
                    q, j;
                i != null ? (typeof i.indent === 'string' && (o.format.indent.style = i.indent), typeof i.base === 'number' && (o.format.indent.base = i.base), i = F(o, i), x = i.format.indent.style, typeof i.base === 'string' ? m = i.base : m = H(x, i.format.indent.base)) : (i = o, x = i.format.indent.style, m = H(x, i.format.indent.base)), v = i.format.json, K = i.format.renumber, S = v ? !1 : i.format.hexadecimal, G = v ? 'double' : i.format.quotes, M = i.format.escapeless, k = i.format.newline, h = i.format.space, i.format.compact && (k = h = x = m = ''), J = i.format.parentheses, O = i.format.semicolons, D = i.format.safeConcatenation, N = i.directive, I = v ? null : i.parse, w = i.sourceMap, n = i, w && (c.browser ? C = b.sourceMap.SourceNode : C = a('/node_modules/source-map/lib/source-map.js', d).SourceNode);
                switch (p.type) {
                    case e.BlockStatement:
                    case e.BreakStatement:
                    case e.CatchClause:
                    case e.ContinueStatement:
                    case e.DirectiveStatement:
                    case e.DoWhileStatement:
                    case e.DebuggerStatement:
                    case e.EmptyStatement:
                    case e.ExpressionStatement:
                    case e.ForStatement:
                    case e.ForInStatement:
                    case e.ForOfStatement:
                    case e.FunctionDeclaration:
                    case e.IfStatement:
                    case e.LabeledStatement:
                    case e.Program:
                    case e.ReturnStatement:
                    case e.SwitchStatement:
                    case e.SwitchCase:
                    case e.ThrowStatement:
                    case e.TryStatement:
                    case e.VariableDeclaration:
                    case e.VariableDeclarator:
                    case e.WhileStatement:
                    case e.WithStatement:
                        q = l(p);
                        break;
                    case e.AssignmentExpression:
                    case e.ArrayExpression:
                    case e.ArrayPattern:
                    case e.BinaryExpression:
                    case e.CallExpression:
                    case e.ConditionalExpression:
                    case e.FunctionExpression:
                    case e.Identifier:
                    case e.Literal:
                    case e.LogicalExpression:
                    case e.MemberExpression:
                    case e.NewExpression:
                    case e.ObjectExpression:
                    case e.ObjectPattern:
                    case e.Property:
                    case e.SequenceExpression:
                    case e.ThisExpression:
                    case e.UnaryExpression:
                    case e.UpdateExpression:
                    case e.YieldExpression:
                        q = g(p, {
                            precedence: f.Sequence,
                            allowIn: !0,
                            allowCall: !0
                        });
                        break;
                    default:
                        throw new Error('Unknown node type: ' + p.type)
                }
                return w ? (j = q.toStringWithSourceMap({
                    file: i.file,
                    sourceRoot: i.sourceMapRoot
                }), i.sourceContent && j.map.setSourceContent(i.sourceMap, i.sourceContent), i.sourceMapWithCode ? j : j.map.toString()) : (j = {
                    code: q.toString(),
                    map: null
                }, i.sourceMapWithCode ? j : j.code)
            }
            W = a('/node_modules/estraverse/estraverse.js', d), q = a('/node_modules/esutils/lib/utils.js', d), e = {
                AssignmentExpression: 'AssignmentExpression',
                ArrayExpression: 'ArrayExpression',
                ArrayPattern: 'ArrayPattern',
                ArrowFunctionExpression: 'ArrowFunctionExpression',
                BlockStatement: 'BlockStatement',
                BinaryExpression: 'BinaryExpression',
                BreakStatement: 'BreakStatement',
                CallExpression: 'CallExpression',
                CatchClause: 'CatchClause',
                ComprehensionBlock: 'ComprehensionBlock',
                ComprehensionExpression: 'ComprehensionExpression',
                ConditionalExpression: 'ConditionalExpression',
                ContinueStatement: 'ContinueStatement',
                DirectiveStatement: 'DirectiveStatement',
                DoWhileStatement: 'DoWhileStatement',
                DebuggerStatement: 'DebuggerStatement',
                EmptyStatement: 'EmptyStatement',
                ExportDeclaration: 'ExportDeclaration',
                ExpressionStatement: 'ExpressionStatement',
                ForStatement: 'ForStatement',
                ForInStatement: 'ForInStatement',
                ForOfStatement: 'ForOfStatement',
                FunctionDeclaration: 'FunctionDeclaration',
                FunctionExpression: 'FunctionExpression',
                GeneratorExpression: 'GeneratorExpression',
                Identifier: 'Identifier',
                IfStatement: 'IfStatement',
                ImportDeclaration: 'ImportDeclaration',
                Literal: 'Literal',
                LabeledStatement: 'LabeledStatement',
                LogicalExpression: 'LogicalExpression',
                MemberExpression: 'MemberExpression',
                NewExpression: 'NewExpression',
                ObjectExpression: 'ObjectExpression',
                ObjectPattern: 'ObjectPattern',
                Program: 'Program',
                Property: 'Property',
                ReturnStatement: 'ReturnStatement',
                SequenceExpression: 'SequenceExpression',
                SwitchStatement: 'SwitchStatement',
                SwitchCase: 'SwitchCase',
                ThisExpression: 'ThisExpression',
                ThrowStatement: 'ThrowStatement',
                TryStatement: 'TryStatement',
                UnaryExpression: 'UnaryExpression',
                UpdateExpression: 'UpdateExpression',
                VariableDeclaration: 'VariableDeclaration',
                VariableDeclarator: 'VariableDeclarator',
                WhileStatement: 'WhileStatement',
                WithStatement: 'WithStatement',
                YieldExpression: 'YieldExpression'
            }, f = {
                Sequence: 0,
                Yield: 1,
                Assignment: 1,
                Conditional: 2,
                ArrowFunction: 2,
                LogicalOR: 3,
                LogicalAND: 4,
                BitwiseOR: 5,
                BitwiseXOR: 6,
                BitwiseAND: 7,
                Equality: 8,
                Relational: 9,
                BitwiseSHIFT: 10,
                Additive: 11,
                Multiplicative: 12,
                Unary: 13,
                Postfix: 14,
                Call: 15,
                New: 16,
                Member: 17,
                Primary: 18
            }, Z = {
                '||': f.LogicalOR,
                '&&': f.LogicalAND,
                '|': f.BitwiseOR,
                '^': f.BitwiseXOR,
                '&': f.BitwiseAND,
                '==': f.Equality,
                '!=': f.Equality,
                '===': f.Equality,
                '!==': f.Equality,
                is: f.Equality,
                isnt: f.Equality,
                '<': f.Relational,
                '>': f.Relational,
                '<=': f.Relational,
                '>=': f.Relational,
                'in': f.Relational,
                'instanceof': f.Relational,
                '<<': f.BitwiseSHIFT,
                '>>': f.BitwiseSHIFT,
                '>>>': f.BitwiseSHIFT,
                '+': f.Additive,
                '-': f.Additive,
                '*': f.Multiplicative,
                '%': f.Multiplicative,
                '/': f.Multiplicative
            }, A = Array.isArray, A || (A = function a(b) {
                return Object.prototype.toString.call(b) === '[object Array]'
            }), U = {
                indent: {
                    style: '',
                    base: 0
                },
                renumber: !0,
                hexadecimal: !0,
                quotes: 'auto',
                escapeless: !0,
                compact: !0,
                parentheses: !1,
                semicolons: !1
            }, _ = Q().format, c.version = a('/package.json', d).version, c.generate = a0, c.attachComments = W.attachComments, c.Precedence = F({}, f), c.browser = !1, c.FORMAT_MINIFY = U, c.FORMAT_DEFAULTS = _
        }()
    }), a.define('/package.json', function(a, b, c, d) {
        a.exports = {
            name: 'escodegen',
            description: 'ECMAScript code generator',
            homepage: 'http://github.com/Constellation/escodegen',
            main: 'escodegen.js',
            bin: {
                esgenerate: './bin/esgenerate.js',
                escodegen: './bin/escodegen.js'
            },
            version: '1.3.3',
            engines: {
                node: '>=0.10.0'
            },
            maintainers: [{
                name: 'Yusuke Suzuki',
                email: 'utatane.tea@gmail.com',
                web: 'http://github.com/Constellation'
            }],
            repository: {
                type: 'git',
                url: 'http://github.com/Constellation/escodegen.git'
            },
            dependencies: {
                esutils: '~1.0.0',
                estraverse: '~1.5.0',
                esprima: '~1.1.1'
            },
            optionalDependencies: {
                'source-map': '~0.1.33'
            },
            devDependencies: {
                'esprima-moz': '*',
                semver: '*',
                chai: '~1.7.2',
                gulp: '~3.5.0',
                'gulp-mocha': '~0.4.1',
                'gulp-eslint': '~0.1.2',
                'jshint-stylish': '~0.1.5',
                'gulp-jshint': '~1.4.0',
                'commonjs-everywhere': '~0.9.6',
                bluebird: '~1.2.0',
                'bower-registry-client': '~0.2.0'
            },
            licenses: [{
                type: 'BSD',
                url: 'http://github.com/Constellation/escodegen/raw/master/LICENSE.BSD'
            }],
            scripts: {
                test: 'gulp travis',
                'unit-test': 'gulp test',
                lint: 'gulp lint',
                release: 'node tools/release.js',
                'build-min': './node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js',
                build: './node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js'
            }
        }
    }), a.define('/node_modules/source-map/lib/source-map.js', function(b, c, d, e) {
        c.SourceMapGenerator = a('/node_modules/source-map/lib/source-map/source-map-generator.js', b).SourceMapGenerator, c.SourceMapConsumer = a('/node_modules/source-map/lib/source-map/source-map-consumer.js', b).SourceMapConsumer, c.SourceNode = a('/node_modules/source-map/lib/source-map/source-node.js', b).SourceNode
    }), a.define('/node_modules/source-map/lib/source-map/source-node.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(c, f, d) {
            function a(a, b, c, d, e) {
                this.children = [], this.sourceContents = {}, this.line = a === undefined ? null : a, this.column = b === undefined ? null : b, this.source = c === undefined ? null : c, this.name = e === undefined ? null : e, d != null && this.add(d)
            }
            var e = c('/node_modules/source-map/lib/source-map/source-map-generator.js', d).SourceMapGenerator,
                b = c('/node_modules/source-map/lib/source-map/util.js', d);
            a.fromStringWithSourceMap = function b(k, h) {
                function i(b, c) {
                    b === null || b.source === undefined ? d.add(c) : d.add(new a(b.originalLine, b.originalColumn, b.source, c, b.name))
                }
                var d = new a,
                    c = k.split('\n'),
                    g = 1,
                    f = 0,
                    e = null;
                if (h.eachMapping(function(a) {
                        if (e !== null)
                            if (g < a.generatedLine) {
                                var h = '';
                                i(e, c.shift() + '\n'), g++, f = 0
                            } else {
                                var b = c[0],
                                    h = b.substr(0, a.generatedColumn - f);
                                c[0] = b.substr(a.generatedColumn - f), f = a.generatedColumn, i(e, h), e = a;
                                return
                            }
                        while (g < a.generatedLine) d.add(c.shift() + '\n'), g++;
                        if (f < a.generatedColumn) {
                            var b = c[0];
                            d.add(b.substr(0, a.generatedColumn)), c[0] = b.substr(a.generatedColumn), f = a.generatedColumn
                        }
                        e = a
                    }, this), c.length > 0) {
                    if (e) {
                        var j = c.shift();
                        c.length > 0 && (j += '\n'), i(e, j)
                    }
                    d.add(c.join('\n'))
                }
                return h.sources.forEach(function(b) {
                    var a = h.sourceContentFor(b);
                    a && d.setSourceContent(b, a)
                }), d
            }, a.prototype.add = function b(c) {
                if (Array.isArray(c)) c.forEach(function(a) {
                    this.add(a)
                }, this);
                else if (c instanceof a || typeof c === 'string') c && this.children.push(c);
                else throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + c);
                return this
            }, a.prototype.prepend = function b(c) {
                if (Array.isArray(c))
                    for (var d = c.length - 1; d >= 0; d--) this.prepend(c[d]);
                else if (c instanceof a || typeof c === 'string') this.children.unshift(c);
                else throw new TypeError('Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + c);
                return this
            }, a.prototype.walk = function b(e) {
                var c;
                for (var d = 0, f = this.children.length; d < f; d++) c = this.children[d], c instanceof a ? c.walk(e) : c !== '' && e(c, {
                    source: this.source,
                    line: this.line,
                    column: this.column,
                    name: this.name
                })
            }, a.prototype.join = function a(e) {
                var b, c, d = this.children.length;
                if (d > 0) {
                    for (b = [], c = 0; c < d - 1; c++) b.push(this.children[c]), b.push(e);
                    b.push(this.children[c]), this.children = b
                }
                return this
            }, a.prototype.replaceRight = function b(d, e) {
                var c = this.children[this.children.length - 1];
                return c instanceof a ? c.replaceRight(d, e) : typeof c === 'string' ? this.children[this.children.length - 1] = c.replace(d, e) : this.children.push(''.replace(d, e)), this
            }, a.prototype.setSourceContent = function a(c, d) {
                this.sourceContents[b.toSetString(c)] = d
            }, a.prototype.walkSourceContents = function c(g) {
                for (var d = 0, e = this.children.length; d < e; d++) this.children[d] instanceof a && this.children[d].walkSourceContents(g);
                var f = Object.keys(this.sourceContents);
                for (var d = 0, e = f.length; d < e; d++) g(b.fromSetString(f[d]), this.sourceContents[f[d]])
            }, a.prototype.toString = function a() {
                var b = '';
                return this.walk(function(a) {
                    b += a
                }), b
            }, a.prototype.toStringWithSourceMap = function a(j) {
                var b = {
                        code: '',
                        line: 1,
                        column: 0
                    },
                    c = new e(j),
                    d = !1,
                    f = null,
                    g = null,
                    h = null,
                    i = null;
                return this.walk(function(e, a) {
                    b.code += e, a.source !== null && a.line !== null && a.column !== null ? ((f !== a.source || g !== a.line || h !== a.column || i !== a.name) && c.addMapping({
                        source: a.source,
                        original: {
                            line: a.line,
                            column: a.column
                        },
                        generated: {
                            line: b.line,
                            column: b.column
                        },
                        name: a.name
                    }), f = a.source, g = a.line, h = a.column, i = a.name, d = !0) : d && (c.addMapping({
                        generated: {
                            line: b.line,
                            column: b.column
                        }
                    }), f = null, d = !1), e.split('').forEach(function(e, g, h) {
                        e === '\n' ? (b.line++, b.column = 0, g + 1 === h.length ? (f = null, d = !1) : d && c.addMapping({
                            source: a.source,
                            original: {
                                line: a.line,
                                column: a.column
                            },
                            generated: {
                                line: b.line,
                                column: b.column
                            },
                            name: a.name
                        })) : b.column++
                    })
                }), this.walkSourceContents(function(a, b) {
                    c.setSourceContent(a, b)
                }), {
                    code: b.code,
                    map: c
                }
            }, f.SourceNode = a
        })
    }), a.define('/node_modules/source-map/lib/source-map/util.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(o, a, p) {
            function m(b, a, c) {
                if (a in b) return b[a];
                else if (arguments.length === 3) return c;
                else throw new Error('"' + a + '" is a required argument.')
            }

            function b(b) {
                var a = b.match(f);
                return a ? {
                    scheme: a[1],
                    auth: a[2],
                    host: a[3],
                    port: a[4],
                    path: a[5]
                } : null
            }

            function c(a) {
                var b = '';
                return a.scheme && (b += a.scheme + ':'), b += '//', a.auth && (b += a.auth + '@'), a.host && (b += a.host), a.port && (b += ':' + a.port), a.path && (b += a.path), b
            }

            function g(i) {
                var a = i,
                    d = b(i);
                if (d) {
                    if (!d.path) return i;
                    a = d.path
                }
                var j = a.charAt(0) === '/',
                    e = a.split(/\/+/);
                for (var h, g = 0, f = e.length - 1; f >= 0; f--) h = e[f], h === '.' ? e.splice(f, 1) : h === '..' ? g++ : g > 0 && (h === '' ? (e.splice(f + 1, g), g = 0) : (e.splice(f, 2), g--));
                return a = e.join('/'), a === '' && (a = j ? '/' : '.'), d ? (d.path = a, c(d)) : a
            }

            function h(h, d) {
                var f = b(d),
                    a = b(h);
                if (a && (h = a.path || '/'), f && !f.scheme) return a && (f.scheme = a.scheme), c(f);
                if (f || d.match(e)) return d;
                if (a && !a.host && !a.path) return a.host = d, c(a);
                var i = d.charAt(0) === '/' ? d : g(h.replace(/\/+$/, '') + '/' + d);
                return a ? (a.path = i, c(a)) : i
            }

            function j(a) {
                return '$' + a
            }

            function k(a) {
                return a.substr(1)
            }

            function l(a, c) {
                a = a.replace(/\/$/, '');
                var d = b(a);
                return c.charAt(0) == '/' && d && d.path == '/' ? c.slice(1) : c.indexOf(a + '/') === 0 ? c.substr(a.length + 1) : c
            }

            function d(c, d) {
                var a = c || '',
                    b = d || '';
                return (a > b) - (a < b)
            }

            function n(b, c, e) {
                var a;
                return a = d(b.source, c.source), a ? a : (a = b.originalLine - c.originalLine, a ? a : (a = b.originalColumn - c.originalColumn, a || e ? a : (a = d(b.name, c.name), a ? a : (a = b.generatedLine - c.generatedLine, a ? a : b.generatedColumn - c.generatedColumn))))
            }

            function i(b, c, e) {
                var a;
                return a = b.generatedLine - c.generatedLine, a ? a : (a = b.generatedColumn - c.generatedColumn, a || e ? a : (a = d(b.source, c.source), a ? a : (a = b.originalLine - c.originalLine, a ? a : (a = b.originalColumn - c.originalColumn, a ? a : d(b.name, c.name)))))
            }
            a.getArg = m;
            var f = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/,
                e = /^data:.+\,.+$/;
            a.urlParse = b, a.urlGenerate = c, a.normalize = g, a.join = h, a.toSetString = j, a.fromSetString = k, a.relative = l, a.compareByOriginalPositions = n, a.compareByGeneratedPositions = i
        })
    }), a.define('/node_modules/source-map/node_modules/amdefine/amdefine.js', function(b, f, g, d) {
        'use strict';

        function e(e, i) {
            'use strict';

            function q(b) {
                var a, c;
                for (a = 0; b[a]; a += 1)
                    if (c = b[a], c === '.') b.splice(a, 1), a -= 1;
                    else if (c === '..')
                    if (a === 1 && (b[2] === '..' || b[0] === '..')) break;
                    else a > 0 && (b.splice(a - 1, 2), a -= 2)
            }

            function j(b, c) {
                var a;
                return b && b.charAt(0) === '.' && c && (a = c.split('/'), a = a.slice(0, a.length - 1), a = a.concat(b.split('/')), q(a), b = a.join('/')), b
            }

            function p(a) {
                return function(b) {
                    return j(b, a)
                }
            }

            function o(c) {
                function a(a) {
                    b[c] = a
                }
                return a.fromText = function(a, b) {
                    throw new Error('amdefine does not implement load.fromText')
                }, a
            }

            function m(c, h, l) {
                var m, f, a, j;
                if (c) f = b[c] = {}, a = {
                    id: c,
                    uri: d,
                    exports: f
                }, m = g(i, f, a, c);
                else {
                    if (k) throw new Error('amdefine with no module ID cannot be called more than once per file.');
                    k = !0, f = e.exports, a = e, m = g(i, f, a, e.id)
                }
                h && (h = h.map(function(a) {
                    return m(a)
                })), typeof l === 'function' ? j = l.apply(a.exports, h) : j = l, j !== undefined && (a.exports = j, c && (b[c] = a.exports))
            }

            function l(b, a, c) {
                Array.isArray(b) ? (c = a, a = b, b = undefined) : typeof b !== 'string' && (c = b, b = a = undefined), a && !Array.isArray(a) && (c = a, a = undefined), a || (a = ['require', 'exports', 'module']), b ? f[b] = [b, a, c] : m(b, a, c)
            }
            var f = {},
                b = {},
                k = !1,
                n = a('path', e),
                g, h;
            return g = function(b, d, a, e) {
                function f(f, g) {
                    if (typeof f === 'string') return h(b, d, a, f, e);
                    f = f.map(function(c) {
                        return h(b, d, a, c, e)
                    }), c.nextTick(function() {
                        g.apply(null, f)
                    })
                }
                return f.toUrl = function(b) {
                    return b.indexOf('.') === 0 ? j(b, n.dirname(a.filename)) : b
                }, f
            }, i = i || function a() {
                return e.require.apply(e, arguments)
            }, h = function(d, e, i, a, c) {
                var k = a.indexOf('!'),
                    n = a,
                    q, l;
                if (k === -1)
                    if (a = j(a, c), a === 'require') return g(d, e, i, c);
                    else if (a === 'exports') return e;
                else if (a === 'module') return i;
                else if (b.hasOwnProperty(a)) return b[a];
                else if (f[a]) return m.apply(null, f[a]), b[a];
                else if (d) return d(n);
                else throw new Error('No module with ID: ' + a);
                else return q = a.substring(0, k), a = a.substring(k + 1, a.length), l = h(d, e, i, q, c), l.normalize ? a = l.normalize(a, p(c)) : a = j(a, c), b[a] ? b[a] : (l.load(a, g(d, e, i, c), o(a), {}), b[a])
            }, l.require = function(a) {
                return b[a] ? b[a] : f[a] ? (m.apply(null, f[a]), b[a]) : void 0
            }, l.amd = {}, l
        }
        b.exports = e
    }), a.define('/node_modules/source-map/lib/source-map/source-map-generator.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(e, g, f) {
            function b(b) {
                b || (b = {}), this._file = a.getArg(b, 'file', null), this._sourceRoot = a.getArg(b, 'sourceRoot', null), this._sources = new d, this._names = new d, this._mappings = [], this._sourcesContents = null
            }
            var c = e('/node_modules/source-map/lib/source-map/base64-vlq.js', f),
                a = e('/node_modules/source-map/lib/source-map/util.js', f),
                d = e('/node_modules/source-map/lib/source-map/array-set.js', f).ArraySet;
            b.prototype._version = 3, b.fromSourceMap = function c(d) {
                var e = d.sourceRoot,
                    f = new b({
                        file: d.file,
                        sourceRoot: e
                    });
                return d.eachMapping(function(b) {
                    var c = {
                        generated: {
                            line: b.generatedLine,
                            column: b.generatedColumn
                        }
                    };
                    b.source && (c.source = b.source, e && (c.source = a.relative(e, c.source)), c.original = {
                        line: b.originalLine,
                        column: b.originalColumn
                    }, b.name && (c.name = b.name)), f.addMapping(c)
                }), d.sources.forEach(function(b) {
                    var a = d.sourceContentFor(b);
                    a && f.setSourceContent(b, a)
                }), f
            }, b.prototype.addMapping = function b(f) {
                var g = a.getArg(f, 'generated'),
                    c = a.getArg(f, 'original', null),
                    d = a.getArg(f, 'source', null),
                    e = a.getArg(f, 'name', null);
                this._validateMapping(g, c, d, e), d && !this._sources.has(d) && this._sources.add(d), e && !this._names.has(e) && this._names.add(e), this._mappings.push({
                    generatedLine: g.line,
                    generatedColumn: g.column,
                    originalLine: c != null && c.line,
                    originalColumn: c != null && c.column,
                    source: d,
                    name: e
                })
            }, b.prototype.setSourceContent = function b(e, d) {
                var c = e;
                this._sourceRoot && (c = a.relative(this._sourceRoot, c)), d !== null ? (this._sourcesContents || (this._sourcesContents = {}), this._sourcesContents[a.toSetString(c)] = d) : (delete this._sourcesContents[a.toSetString(c)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
            }, b.prototype.applySourceMap = function b(e, f, i) {
                if (!f) {
                    if (!e.file) throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
                    f = e.file
                }
                var c = this._sourceRoot;
                c && (f = a.relative(c, f));
                var g = new d,
                    h = new d;
                this._mappings.forEach(function(b) {
                    if (b.source === f && b.originalLine) {
                        var d = e.originalPositionFor({
                            line: b.originalLine,
                            column: b.originalColumn
                        });
                        d.source !== null && (b.source = d.source, i && (b.source = a.join(i, b.source)), c && (b.source = a.relative(c, b.source)), b.originalLine = d.line, b.originalColumn = d.column, d.name !== null && b.name !== null && (b.name = d.name))
                    }
                    var j = b.source;
                    j && !g.has(j) && g.add(j);
                    var k = b.name;
                    k && !h.has(k) && h.add(k)
                }, this), this._sources = g, this._names = h, e.sources.forEach(function(b) {
                    var d = e.sourceContentFor(b);
                    d && (c && (b = a.relative(c, b)), this.setSourceContent(b, d))
                }, this)
            }, b.prototype._validateMapping = function a(b, c, d, e) {
                if (b && 'line' in b && 'column' in b && b.line > 0 && b.column >= 0 && !c && !d && !e) return;
                else if (b && 'line' in b && 'column' in b && c && 'line' in c && 'column' in c && b.line > 0 && b.column >= 0 && c.line > 0 && c.column >= 0 && d) return;
                else throw new Error('Invalid mapping: ' + JSON.stringify({
                    generated: b,
                    source: d,
                    original: c,
                    name: e
                }))
            }, b.prototype._serializeMappings = function b() {
                var h = 0,
                    g = 1,
                    j = 0,
                    k = 0,
                    i = 0,
                    l = 0,
                    e = '',
                    d;
                this._mappings.sort(a.compareByGeneratedPositions);
                for (var f = 0, m = this._mappings.length; f < m; f++) {
                    if (d = this._mappings[f], d.generatedLine !== g) {
                        h = 0;
                        while (d.generatedLine !== g) e += ';', g++
                    } else if (f > 0) {
                        if (!a.compareByGeneratedPositions(d, this._mappings[f - 1])) continue;
                        e += ','
                    }
                    e += c.encode(d.generatedColumn - h), h = d.generatedColumn, d.source && (e += c.encode(this._sources.indexOf(d.source) - l), l = this._sources.indexOf(d.source), e += c.encode(d.originalLine - 1 - k), k = d.originalLine - 1, e += c.encode(d.originalColumn - j), j = d.originalColumn, d.name && (e += c.encode(this._names.indexOf(d.name) - i), i = this._names.indexOf(d.name)))
                }
                return e
            }, b.prototype._generateSourcesContent = function b(d, c) {
                return d.map(function(b) {
                    if (!this._sourcesContents) return null;
                    c && (b = a.relative(c, b));
                    var d = a.toSetString(b);
                    return Object.prototype.hasOwnProperty.call(this._sourcesContents, d) ? this._sourcesContents[d] : null
                }, this)
            }, b.prototype.toJSON = function a() {
                var b = {
                    version: this._version,
                    file: this._file,
                    sources: this._sources.toArray(),
                    names: this._names.toArray(),
                    mappings: this._serializeMappings()
                };
                return this._sourceRoot && (b.sourceRoot = this._sourceRoot), this._sourcesContents && (b.sourcesContent = this._generateSourcesContent(b.sources, b.sourceRoot)), b
            }, b.prototype.toString = function a() {
                return JSON.stringify(this)
            }, g.SourceMapGenerator = b
        })
    }), a.define('/node_modules/source-map/lib/source-map/array-set.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(c, d, e) {
            function a() {
                this._array = [], this._set = {}
            }
            var b = c('/node_modules/source-map/lib/source-map/util.js', e);
            a.fromArray = function b(e, g) {
                var d = new a;
                for (var c = 0, f = e.length; c < f; c++) d.add(e[c], g);
                return d
            }, a.prototype.add = function a(c, f) {
                var d = this.has(c),
                    e = this._array.length;
                (!d || f) && this._array.push(c), d || (this._set[b.toSetString(c)] = e)
            }, a.prototype.has = function a(c) {
                return Object.prototype.hasOwnProperty.call(this._set, b.toSetString(c))
            }, a.prototype.indexOf = function a(c) {
                if (this.has(c)) return this._set[b.toSetString(c)];
                throw new Error('"' + c + '" is not in the set.')
            }, a.prototype.at = function a(b) {
                if (b >= 0 && b < this._array.length) return this._array[b];
                throw new Error('No element indexed by ' + b)
            }, a.prototype.toArray = function a() {
                return this._array.slice()
            }, d.ArraySet = a
        })
    }), a.define('/node_modules/source-map/lib/source-map/base64-vlq.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(j, f, h) {
            function i(a) {
                return a < 0 ? (-a << 1) + 1 : (a << 1) + 0
            }

            function g(b) {
                var c = (b & 1) === 1,
                    a = b >> 1;
                return c ? -a : a
            }
            var c = j('/node_modules/source-map/lib/source-map/base64.js', h),
                a = 5,
                d = 1 << a,
                e = d - 1,
                b = d;
            f.encode = function d(j) {
                var g = '',
                    h, f = i(j);
                do h = f & e, f >>>= a, f > 0 && (h |= b), g += c.encode(h); while (f > 0);
                return g
            }, f.decode = function d(i) {
                var f = 0,
                    l = i.length,
                    j = 0,
                    k = 0,
                    m, h;
                do {
                    if (f >= l) throw new Error('Expected more digits in base 64 VLQ value.');
                    h = c.decode(i.charAt(f++)), m = !!(h & b), h &= e, j += h << k, k += a
                } while (m);
                return {
                    value: g(j),
                    rest: i.slice(f)
                }
            }
        })
    }), a.define('/node_modules/source-map/lib/source-map/base64.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(d, c, e) {
            var a = {},
                b = {};
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('').forEach(function(c, d) {
                a[c] = d, b[d] = c
            }), c.encode = function a(c) {
                if (c in b) return b[c];
                throw new TypeError('Must be between 0 and 63: ' + c)
            }, c.decode = function b(c) {
                if (c in a) return a[c];
                throw new TypeError('Not a valid base 64 digit: ' + c)
            }
        })
    }), a.define('/node_modules/source-map/lib/source-map/source-map-consumer.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(e, h, f) {
            function b(c) {
                var b = c;
                typeof c === 'string' && (b = JSON.parse(c.replace(/^\)\]\}'/, '')));
                var e = a.getArg(b, 'version'),
                    f = a.getArg(b, 'sources'),
                    g = a.getArg(b, 'names', []),
                    h = a.getArg(b, 'sourceRoot', null),
                    i = a.getArg(b, 'sourcesContent', null),
                    j = a.getArg(b, 'mappings'),
                    k = a.getArg(b, 'file', null);
                if (e != this._version) throw new Error('Unsupported version: ' + e);
                this._names = d.fromArray(g, !0), this._sources = d.fromArray(f, !0), this.sourceRoot = h, this.sourcesContent = i, this._mappings = j, this.file = k
            }
            var a = e('/node_modules/source-map/lib/source-map/util.js', f),
                g = e('/node_modules/source-map/lib/source-map/binary-search.js', f),
                d = e('/node_modules/source-map/lib/source-map/array-set.js', f).ArraySet,
                c = e('/node_modules/source-map/lib/source-map/base64-vlq.js', f);
            b.fromSourceMap = function c(f) {
                var e = Object.create(b.prototype);
                return e._names = d.fromArray(f._names.toArray(), !0), e._sources = d.fromArray(f._sources.toArray(), !0), e.sourceRoot = f._sourceRoot, e.sourcesContent = f._generateSourcesContent(e._sources.toArray(), e.sourceRoot), e.file = f._file, e.__generatedMappings = f._mappings.slice().sort(a.compareByGeneratedPositions), e.__originalMappings = f._mappings.slice().sort(a.compareByOriginalPositions), e
            }, b.prototype._version = 3, Object.defineProperty(b.prototype, 'sources', {
                get: function() {
                    return this._sources.toArray().map(function(b) {
                        return this.sourceRoot ? a.join(this.sourceRoot, b) : b
                    }, this)
                }
            }), b.prototype.__generatedMappings = null, Object.defineProperty(b.prototype, '_generatedMappings', {
                get: function() {
                    return this.__generatedMappings || (this.__generatedMappings = [], this.__originalMappings = [], this._parseMappings(this._mappings, this.sourceRoot)), this.__generatedMappings
                }
            }), b.prototype.__originalMappings = null, Object.defineProperty(b.prototype, '_originalMappings', {
                get: function() {
                    return this.__originalMappings || (this.__generatedMappings = [], this.__originalMappings = [], this._parseMappings(this._mappings, this.sourceRoot)), this.__originalMappings
                }
            }), b.prototype._parseMappings = function b(n, o) {
                var j = 1,
                    h = 0,
                    i = 0,
                    m = 0,
                    k = 0,
                    l = 0,
                    g = /^[,;]/,
                    d = n,
                    f, e;
                while (d.length > 0)
                    if (d.charAt(0) === ';') j++, d = d.slice(1), h = 0;
                    else if (d.charAt(0) === ',') d = d.slice(1);
                else {
                    if (f = {}, f.generatedLine = j, e = c.decode(d), f.generatedColumn = h + e.value, h = f.generatedColumn, d = e.rest, d.length > 0 && !g.test(d.charAt(0))) {
                        if (e = c.decode(d), f.source = this._sources.at(k + e.value), k += e.value, d = e.rest, d.length === 0 || g.test(d.charAt(0))) throw new Error('Found a source, but no line and column');
                        if (e = c.decode(d), f.originalLine = i + e.value, i = f.originalLine, f.originalLine += 1, d = e.rest, d.length === 0 || g.test(d.charAt(0))) throw new Error('Found a source and line, but no column');
                        e = c.decode(d), f.originalColumn = m + e.value, m = f.originalColumn, d = e.rest, d.length > 0 && !g.test(d.charAt(0)) && (e = c.decode(d), f.name = this._names.at(l + e.value), l += e.value, d = e.rest)
                    }
                    this.__generatedMappings.push(f), typeof f.originalLine === 'number' && this.__originalMappings.push(f)
                }
                this.__generatedMappings.sort(a.compareByGeneratedPositions), this.__originalMappings.sort(a.compareByOriginalPositions)
            }, b.prototype._findMapping = function a(b, e, c, d, f) {
                if (b[c] <= 0) throw new TypeError('Line must be greater than or equal to 1, got ' + b[c]);
                if (b[d] < 0) throw new TypeError('Column must be greater than or equal to 0, got ' + b[d]);
                return g.search(b, e, f)
            }, b.prototype.originalPositionFor = function b(f) {
                var e = {
                        generatedLine: a.getArg(f, 'line'),
                        generatedColumn: a.getArg(f, 'column')
                    },
                    c = this._findMapping(e, this._generatedMappings, 'generatedLine', 'generatedColumn', a.compareByGeneratedPositions);
                if (c && c.generatedLine === e.generatedLine) {
                    var d = a.getArg(c, 'source', null);
                    return d && this.sourceRoot && (d = a.join(this.sourceRoot, d)), {
                        source: d,
                        line: a.getArg(c, 'originalLine', null),
                        column: a.getArg(c, 'originalColumn', null),
                        name: a.getArg(c, 'name', null)
                    }
                }
                return {
                    source: null,
                    line: null,
                    column: null,
                    name: null
                }
            }, b.prototype.sourceContentFor = function b(c) {
                if (!this.sourcesContent) return null;
                if (this.sourceRoot && (c = a.relative(this.sourceRoot, c)), this._sources.has(c)) return this.sourcesContent[this._sources.indexOf(c)];
                var d;
                if (this.sourceRoot && (d = a.urlParse(this.sourceRoot))) {
                    var e = c.replace(/^file:\/\//, '');
                    if (d.scheme == 'file' && this._sources.has(e)) return this.sourcesContent[this._sources.indexOf(e)];
                    if ((!d.path || d.path == '/') && this._sources.has('/' + c)) return this.sourcesContent[this._sources.indexOf('/' + c)]
                }
                throw new Error('"' + c + '" is not in the SourceMap.')
            }, b.prototype.generatedPositionFor = function b(e) {
                var c = {
                    source: a.getArg(e, 'source'),
                    originalLine: a.getArg(e, 'line'),
                    originalColumn: a.getArg(e, 'column')
                };
                this.sourceRoot && (c.source = a.relative(this.sourceRoot, c.source));
                var d = this._findMapping(c, this._originalMappings, 'originalLine', 'originalColumn', a.compareByOriginalPositions);
                return d ? {
                    line: a.getArg(d, 'generatedLine', null),
                    column: a.getArg(d, 'generatedColumn', null)
                } : {
                    line: null,
                    column: null
                }
            }, b.GENERATED_ORDER = 1, b.ORIGINAL_ORDER = 2, b.prototype.eachMapping = function c(h, i, j) {
                var f = i || null,
                    g = j || b.GENERATED_ORDER,
                    d;
                switch (g) {
                    case b.GENERATED_ORDER:
                        d = this._generatedMappings;
                        break;
                    case b.ORIGINAL_ORDER:
                        d = this._originalMappings;
                        break;
                    default:
                        throw new Error('Unknown order of iteration.')
                }
                var e = this.sourceRoot;
                d.map(function(b) {
                    var c = b.source;
                    return c && e && (c = a.join(e, c)), {
                        source: c,
                        generatedLine: b.generatedLine,
                        generatedColumn: b.generatedColumn,
                        originalLine: b.originalLine,
                        originalColumn: b.originalColumn,
                        name: b.name
                    }
                }).forEach(h, f)
            }, h.SourceMapConsumer = b
        })
    }), a.define('/node_modules/source-map/lib/source-map/binary-search.js', function(c, d, e, f) {
        if (typeof b !== 'function') var b = a('/node_modules/source-map/node_modules/amdefine/amdefine.js', c)(c, a);
        b(function(c, b, d) {
            function a(c, e, f, d, g) {
                var b = Math.floor((e - c) / 2) + c,
                    h = g(f, d[b], !0);
                return h === 0 ? d[b] : h > 0 ? e - b > 1 ? a(b, e, f, d, g) : d[b] : b - c > 1 ? a(c, b, f, d, g) : c < 0 ? null : d[c]
            }
            b.search = function b(d, c, e) {
                return c.length > 0 ? a(-1, c.length, d, c, e) : null
            }
        })
    }), a.define('/node_modules/esutils/lib/utils.js', function(b, c, d, e) {
        ! function() {
            'use strict';
            c.code = a('/node_modules/esutils/lib/code.js', b), c.keyword = a('/node_modules/esutils/lib/keyword.js', b)
        }()
    }), a.define('/node_modules/esutils/lib/keyword.js', function(b, c, d, e) {
        ! function(c) {
            'use strict';

            function e(a) {
                switch (a) {
                    case 'implements':
                    case 'interface':
                    case 'package':
                    case 'private':
                    case 'protected':
                    case 'public':
                    case 'static':
                    case 'let':
                        return !0;
                    default:
                        return !1
                }
            }

            function f(a, b) {
                return !b && a === 'yield' ? !1 : d(a, b)
            }

            function d(a, b) {
                if (b && e(a)) return !0;
                switch (a.length) {
                    case 2:
                        return a === 'if' || a === 'in' || a === 'do';
                    case 3:
                        return a === 'var' || a === 'for' || a === 'new' || a === 'try';
                    case 4:
                        return a === 'this' || a === 'else' || a === 'case' || a === 'void' || a === 'with' || a === 'enum';
                    case 5:
                        return a === 'while' || a === 'break' || a === 'catch' || a === 'throw' || a === 'const' || a === 'yield' || a === 'class' || a === 'super';
                    case 6:
                        return a === 'return' || a === 'typeof' || a === 'delete' || a === 'switch' || a === 'export' || a === 'import';
                    case 7:
                        return a === 'default' || a === 'finally' || a === 'extends';
                    case 8:
                        return a === 'function' || a === 'continue' || a === 'debugger';
                    case 10:
                        return a === 'instanceof';
                    default:
                        return !1
                }
            }

            function g(a) {
                return a === 'eval' || a === 'arguments'
            }

            function h(b) {
                var d, e, a;
                if (b.length === 0) return !1;
                if (a = b.charCodeAt(0), !c.isIdentifierStart(a) || a === 92) return !1;
                for (d = 1, e = b.length; d < e; ++d)
                    if (a = b.charCodeAt(d), !c.isIdentifierPart(a) || a === 92) return !1;
                return !0
            }
            c = a('/node_modules/esutils/lib/code.js', b), b.exports = {
                isKeywordES5: f,
                isKeywordES6: d,
                isRestrictedWord: g,
                isIdentifierName: h
            }
        }()
    }), a.define('/node_modules/esutils/lib/code.js', function(a, b, c, d) {
        ! function(b) {
            'use strict';

            function c(a) {
                return a >= 48 && a <= 57
            }

            function d(a) {
                return c(a) || 97 <= a && a <= 102 || 65 <= a && a <= 70
            }

            function e(a) {
                return a >= 48 && a <= 55
            }

            function f(a) {
                return a === 32 || a === 9 || a === 11 || a === 12 || a === 160 || a >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(a) >= 0
            }

            function g(a) {
                return a === 10 || a === 13 || a === 8232 || a === 8233
            }

            function h(a) {
                return a === 36 || a === 95 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || a === 92 || a >= 128 && b.NonAsciiIdentifierStart.test(String.fromCharCode(a))
            }

            function i(a) {
                return a === 36 || a === 95 || a >= 65 && a <= 90 || a >= 97 && a <= 122 || a >= 48 && a <= 57 || a === 92 || a >= 128 && b.NonAsciiIdentifierPart.test(String.fromCharCode(a))
            }
            b = {
                NonAsciiIdentifierStart: new RegExp('[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]'),
                NonAsciiIdentifierPart: new RegExp('[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]')
            }, a.exports = {
                isDecimalDigit: c,
                isHexDigit: d,
                isOctalDigit: e,
                isWhiteSpace: f,
                isLineTerminator: g,
                isIdentifierStart: h,
                isIdentifierPart: i
            }
        }()
    }), a.define('/node_modules/estraverse/estraverse.js', function(b, a, c, d) {
        ! function(c, b) {
            'use strict';
            typeof define === 'function' && define.amd ? define(['exports'], b) : a !== void 0 ? b(a) : b(c.estraverse = {})
        }(this, function(e) {
            'use strict';

            function m() {}

            function l(d) {
                var c = {},
                    a, b;
                for (a in d) d.hasOwnProperty(a) && (b = d[a], typeof b === 'object' && b !== null ? c[a] = l(b) : c[a] = b);
                return c
            }

            function s(b) {
                var c = {},
                    a;
                for (a in b) b.hasOwnProperty(a) && (c[a] = b[a]);
                return c
            }

            function r(e, f) {
                var b, a, c, d;
                a = e.length, c = 0;
                while (a) b = a >>> 1, d = c + b, f(e[d]) ? a = b : (c = d + 1, a -= b + 1);
                return c
            }

            function q(e, f) {
                var b, a, c, d;
                a = e.length, c = 0;
                while (a) b = a >>> 1, d = c + b, f(e[d]) ? (c = d + 1, a -= b + 1) : a = b;
                return c
            }

            function h(a, b) {
                this.parent = a, this.key = b
            }

            function d(a, b, c, d) {
                this.node = a, this.path = b, this.wrap = c, this.ref = d
            }

            function b() {}

            function k(c, d) {
                var a = new b;
                return a.traverse(c, d)
            }

            function p(c, d) {
                var a = new b;
                return a.replace(c, d)
            }

            function n(a, c) {
                var b;
                return b = r(c, function b(c) {
                    return c.range[0] > a.range[0]
                }), a.extendedRange = [a.range[0], a.range[1]], b !== c.length && (a.extendedRange[1] = c[b].range[0]), b -= 1, b >= 0 && (a.extendedRange[0] = c[b].range[1]), a
            }

            function o(d, e, i) {
                var a = [],
                    h, g, c, b;
                if (!d.range) throw new Error('attachComments needs range information');
                if (!i.length) {
                    if (e.length) {
                        for (c = 0, g = e.length; c < g; c += 1) h = l(e[c]), h.extendedRange = [0, d.range[0]], a.push(h);
                        d.leadingComments = a
                    }
                    return d
                }
                for (c = 0, g = e.length; c < g; c += 1) a.push(n(l(e[c]), i));
                return b = 0, k(d, {
                    enter: function(c) {
                        var d;
                        while (b < a.length) {
                            if (d = a[b], d.extendedRange[1] > c.range[0]) break;
                            d.extendedRange[1] === c.range[0] ? (c.leadingComments || (c.leadingComments = []), c.leadingComments.push(d), a.splice(b, 1)) : b += 1
                        }
                        return b === a.length ? f.Break : a[b].extendedRange[0] > c.range[1] ? f.Skip : void 0
                    }
                }), b = 0, k(d, {
                    leave: function(c) {
                        var d;
                        while (b < a.length) {
                            if (d = a[b], c.range[1] < d.extendedRange[0]) break;
                            c.range[1] === d.extendedRange[0] ? (c.trailingComments || (c.trailingComments = []), c.trailingComments.push(d), a.splice(b, 1)) : b += 1
                        }
                        return b === a.length ? f.Break : a[b].extendedRange[0] > c.range[1] ? f.Skip : void 0
                    }
                }), d
            }
            var i, g, f, j, a, c;
            i = {
                AssignmentExpression: 'AssignmentExpression',
                ArrayExpression: 'ArrayExpression',
                ArrayPattern: 'ArrayPattern',
                ArrowFunctionExpression: 'ArrowFunctionExpression',
                BlockStatement: 'BlockStatement',
                BinaryExpression: 'BinaryExpression',
                BreakStatement: 'BreakStatement',
                CallExpression: 'CallExpression',
                CatchClause: 'CatchClause',
                ClassBody: 'ClassBody',
                ClassDeclaration: 'ClassDeclaration',
                ClassExpression: 'ClassExpression',
                ConditionalExpression: 'ConditionalExpression',
                ContinueStatement: 'ContinueStatement',
                DebuggerStatement: 'DebuggerStatement',
                DirectiveStatement: 'DirectiveStatement',
                DoWhileStatement: 'DoWhileStatement',
                EmptyStatement: 'EmptyStatement',
                ExpressionStatement: 'ExpressionStatement',
                ForStatement: 'ForStatement',
                ForInStatement: 'ForInStatement',
                FunctionDeclaration: 'FunctionDeclaration',
                FunctionExpression: 'FunctionExpression',
                Identifier: 'Identifier',
                IfStatement: 'IfStatement',
                Literal: 'Literal',
                LabeledStatement: 'LabeledStatement',
                LogicalExpression: 'LogicalExpression',
                MemberExpression: 'MemberExpression',
                MethodDefinition: 'MethodDefinition',
                NewExpression: 'NewExpression',
                ObjectExpression: 'ObjectExpression',
                ObjectPattern: 'ObjectPattern',
                Program: 'Program',
                Property: 'Property',
                ReturnStatement: 'ReturnStatement',
                SequenceExpression: 'SequenceExpression',
                SwitchStatement: 'SwitchStatement',
                SwitchCase: 'SwitchCase',
                ThisExpression: 'ThisExpression',
                ThrowStatement: 'ThrowStatement',
                TryStatement: 'TryStatement',
                UnaryExpression: 'UnaryExpression',
                UpdateExpression: 'UpdateExpression',
                VariableDeclaration: 'VariableDeclaration',
                VariableDeclarator: 'VariableDeclarator',
                WhileStatement: 'WhileStatement',
                WithStatement: 'WithStatement',
                YieldExpression: 'YieldExpression'
            }, g = Array.isArray, g || (g = function a(b) {
                return Object.prototype.toString.call(b) === '[object Array]'
            }), m(s), m(q), j = {
                AssignmentExpression: ['left', 'right'],
                ArrayExpression: ['elements'],
                ArrayPattern: ['elements'],
                ArrowFunctionExpression: ['params', 'defaults', 'rest', 'body'],
                BlockStatement: ['body'],
                BinaryExpression: ['left', 'right'],
                BreakStatement: ['label'],
                CallExpression: ['callee', 'arguments'],
                CatchClause: ['param', 'body'],
                ClassBody: ['body'],
                ClassDeclaration: ['id', 'body', 'superClass'],
                ClassExpression: ['id', 'body', 'superClass'],
                ConditionalExpression: ['test', 'consequent', 'alternate'],
                ContinueStatement: ['label'],
                DebuggerStatement: [],
                DirectiveStatement: [],
                DoWhileStatement: ['body', 'test'],
                EmptyStatement: [],
                ExpressionStatement: ['expression'],
                ForStatement: ['init', 'test', 'update', 'body'],
                ForInStatement: ['left', 'right', 'body'],
                FunctionDeclaration: ['id', 'params', 'defaults', 'rest', 'body'],
                FunctionExpression: ['id', 'params', 'defaults', 'rest', 'body'],
                Identifier: [],
                IfStatement: ['test', 'consequent', 'alternate'],
                Literal: [],
                LabeledStatement: ['label', 'body'],
                LogicalExpression: ['left', 'right'],
                MemberExpression: ['object', 'property'],
                MethodDefinition: ['key', 'value'],
                NewExpression: ['callee', 'arguments'],
                ObjectExpression: ['properties'],
                ObjectPattern: ['properties'],
                Program: ['body'],
                Property: ['key', 'value'],
                ReturnStatement: ['argument'],
                SequenceExpression: ['expressions'],
                SwitchStatement: ['discriminant', 'cases'],
                SwitchCase: ['test', 'consequent'],
                ThisExpression: [],
                ThrowStatement: ['argument'],
                TryStatement: ['block', 'handlers', 'handler', 'guardedHandlers', 'finalizer'],
                UnaryExpression: ['argument'],
                UpdateExpression: ['argument'],
                VariableDeclaration: ['declarations'],
                VariableDeclarator: ['id', 'init'],
                WhileStatement: ['test', 'body'],
                WithStatement: ['object', 'body'],
                YieldExpression: ['argument']
            }, a = {}, c = {}, f = {
                Break: a,
                Skip: c
            }, h.prototype.replace = function a(b) {
                this.parent[this.key] = b
            }, b.prototype.path = function a() {
                function e(b, a) {
                    if (g(a))
                        for (c = 0, h = a.length; c < h; ++c) b.push(a[c]);
                    else b.push(a)
                }
                var b, f, c, h, d, i;
                if (!this.__current.path) return null;
                for (d = [], b = 2, f = this.__leavelist.length; b < f; ++b) i = this.__leavelist[b], e(d, i.path);
                return e(d, this.__current.path), d
            }, b.prototype.parents = function a() {
                var b, d, c;
                for (c = [], b = 1, d = this.__leavelist.length; b < d; ++b) c.push(this.__leavelist[b].node);
                return c
            }, b.prototype.current = function a() {
                return this.__current.node
            }, b.prototype.__execute = function a(c, d) {
                var e, b;
                return b = undefined, e = this.__current, this.__current = d, this.__state = null, c && (b = c.call(this, d.node, this.__leavelist[this.__leavelist.length - 1].node)), this.__current = e, b
            }, b.prototype.notify = function a(b) {
                this.__state = b
            }, b.prototype.skip = function() {
                this.notify(c)
            }, b.prototype['break'] = function() {
                this.notify(a)
            }, b.prototype.__initialize = function(a, b) {
                this.visitor = b, this.root = a, this.__worklist = [], this.__leavelist = [], this.__current = null, this.__state = null
            }, b.prototype.traverse = function b(u, r) {
                var h, o, e, t, n, l, m, p, k, q, f, s;
                this.__initialize(u, r), s = {}, h = this.__worklist, o = this.__leavelist, h.push(new d(u, null, null, null)), o.push(new d(null, null, null, null));
                while (h.length) {
                    if (e = h.pop(), e === s) {
                        if (e = o.pop(), l = this.__execute(r.leave, e), this.__state === a || l === a) return;
                        continue
                    }
                    if (e.node) {
                        if (l = this.__execute(r.enter, e), this.__state === a || l === a) return;
                        if (h.push(s), o.push(e), this.__state === c || l === c) continue;
                        t = e.node, n = e.wrap || t.type, q = j[n], p = q.length;
                        while ((p -= 1) >= 0) {
                            if (m = q[p], f = t[m], !f) continue;
                            if (!g(f)) {
                                h.push(new d(f, m, null, null));
                                continue
                            }
                            k = f.length;
                            while ((k -= 1) >= 0) {
                                if (!f[k]) continue;
                                (n === i.ObjectExpression || n === i.ObjectPattern) && 'properties' === q[p] ? e = new d(f[k], [m, k], 'Property', null) : e = new d(f[k], [m, k], null, null), h.push(e)
                            }
                        }
                    }
                }
            }, b.prototype.replace = function b(u, v) {
                var m, r, o, t, f, e, q, l, s, k, w, p, n;
                this.__initialize(u, v), w = {}, m = this.__worklist, r = this.__leavelist, p = {
                    root: u
                }, e = new d(u, null, null, new h(p, 'root')), m.push(e), r.push(e);
                while (m.length) {
                    if (e = m.pop(), e === w) {
                        if (e = r.pop(), f = this.__execute(v.leave, e), f !== undefined && f !== a && f !== c && e.ref.replace(f), this.__state === a || f === a) return p.root;
                        continue
                    }
                    if (f = this.__execute(v.enter, e), f !== undefined && f !== a && f !== c && (e.ref.replace(f), e.node = f), this.__state === a || f === a) return p.root;
                    if (o = e.node, !o) continue;
                    if (m.push(w), r.push(e), this.__state === c || f === c) continue;
                    t = e.wrap || o.type, s = j[t], q = s.length;
                    while ((q -= 1) >= 0) {
                        if (n = s[q], k = o[n], !k) continue;
                        if (!g(k)) {
                            m.push(new d(k, n, null, new h(o, n)));
                            continue
                        }
                        l = k.length;
                        while ((l -= 1) >= 0) {
                            if (!k[l]) continue;
                            t === i.ObjectExpression && 'properties' === s[q] ? e = new d(k[l], [n, l], 'Property', new h(k, l)) : e = new d(k[l], [n, l], null, new h(k, l)), m.push(e)
                        }
                    }
                }
                return p.root
            }, e.version = '1.3.3-dev', e.Syntax = i, e.traverse = k, e.replace = p, e.attachComments = o, e.VisitorKeys = j, e.VisitorOption = f, e.Controller = b
        })
    }), a('/tools/entry-point.js')
}.call(this, this))