exports.route = function route(path, controllers, req, res) {
    if (controllers[path]) {
        controllers[path](req, res);
    }
    else {
        controllers["404"](req, res);
    }
}