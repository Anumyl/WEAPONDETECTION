__all__ = ['test']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['display'])
@Js
def PyJsHoisted_display_(e, this, arguments, var=var):
    var = Scope({'e':e, 'this':this, 'arguments':arguments}, var)
    var.registers(['e', 'PORT', 'i', 'net', 'http', 'HOST', 'ser', 'n', 'je'])
    var.get('console').callprop('log', Js(''))
    var.get('console').callprop('log', Js('HASH VALES'))
    var.put('n', var.get('e').get('length'))
    #for JS loop
    var.put('i', Js(0.0))
    while (var.get('i')<var.get('n')):
        try:
            var.get('console').callprop('log', var.get('e').get(var.get('i')))
        finally:
                (var.put('i',Js(var.get('i').to_number())+Js(1))-Js(1))
    var.get('console').callprop('log', Js(''))
    var.get('console').callprop('log', var.get('e'))
    var.put('je', var.get('JSON').callprop('stringify', var.get('e')))
    var.get('console').callprop('log', var.get('je'))
    var.put('http', var.get('require')(Js('http')))
    var.put('net', var.get('require')(Js('net')))
    var.put('HOST', Js('localhost'))
    var.put('PORT', Js(65432.0))
    @Js
    def PyJs_anonymous_0_(req, res, this, arguments, var=var):
        var = Scope({'req':req, 'res':res, 'this':this, 'arguments':arguments}, var)
        var.registers(['res', 'req'])
        var.get('console').callprop('log', Js('sending data'))
        var.get('res').callprop('setHeader', Js('Content-Type'), Js('application/json'))
        var.get('res').callprop('writeHead', Js(200.0), Js({'Content-Type':Js('text/plain'),'Access-Control-Allow-Origin':Js('*'),'Access-Control-Allow-Methods':Js('GET,PUT,POST,DELETE')}))
        var.get('res').callprop('end', var.get('JSON').callprop('stringify', var.get('e')))
    PyJs_anonymous_0_._set_name('anonymous')
    var.put('ser', var.get('http').callprop('createServer', PyJs_anonymous_0_))
    var.get('ser').callprop('listen', var.get('PORT'), var.get('HOST'))
PyJsHoisted_display_.func_name = 'display'
var.put('display', PyJsHoisted_display_)
pass
pass


# Add lib to the module scope
test = var.to_python()