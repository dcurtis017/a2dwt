System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true,
        target: 'ES5',
        module: 'commonjs'
    },
    map: {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    },
    paths: {
        'node_modules/@angular/*': 'node_modules/@angular/*/bundles'
    },
    meta: {
        '@angular/*': {'format': 'cjs'}
    },
    packages: {
        'app': {main: 'main', defaultExtension: 'ts'},
        'rxjs': {main: 'Rx'},
        '@angular/core': {main: 'core.umd.min.js'},
        '@angular/common': {main: 'common.umd.min.js'},
        '@angular/router': {main: 'router.umd.min.js'},
        '@angular/compiler': {main: 'compiler.umd.min.js'},
        '@angular/platform-browser': {main: 'platform-browser.umd.min.js'},
        '@angular/platform-browser-dynamic': {main: 'platform-browser-dynamic.umd.min.js'}
    }
});
//map allows you to create an alias for a module name
//the map parameter is applied before the baseURL
//a module can't span multiple files. A bundle is usually represented by a single file 
//and contains multiple modules registered in it. 