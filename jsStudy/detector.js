/**
 * Created by wwh on 16/9/6.
 */

!function (global) {
    function DetectorBase(configs) {
        if (!this instanceof DetectorBase) {
            throw new Error("Do not invoke without new.");
        }
        this.configs = configs;
        this.analyze();
    }

    DetectorBase.prototype.detect = function () {
        throw new Error("Not implemented");
    };

    DetectorBase.prototype.analyze = function () {
        console.log("analying");
        this.data = "###data###";
    };

    function LinkDetector(links) {
        if (!this instanceof LinkDetector) {
            throw new Error("Do not invoke without new.");
        }
        this.links = links;
        DetectorBase.apply(this, arguments);
    }

    function ContainerDetector(containers) {
        if (!this instanceof ContainerDetector) {
            throw new Error("Do not invoke without new.");
        }
        this.containers = containers;
        DetectorBase.apply(this, arguments);
    }

    function inherit(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
    }

    inherit(LinkDetector, DetectorBase);
    inherit(ContainerDetector, DetectorBase);

    LinkDetector.prototype.detect = function () {
        console.log("Loading data" + this.data);
        console.log("Link detection start");
        console.log("Scaning links" + this.links);
    };

    ContainerDetector.prototype.detect = function () {
        console.log("Loading data" + this.data);
        console.log("Link detection start");
        console.log("Scaning container" + this.containers);
    };

    Object.freeze(DetectorBase);
    Object.freeze(DetectorBase.prototype);
    Object.freeze(LinkDetector);
    Object.freeze(LinkDetector.prototype);
    Object.freeze(ContainerDetector);
    Object.freeze(ContainerDetector.prototype);

    Object.defineProperties(global, {
        LinkDetector: {value: LinkDetector},
        ContainerDetector: {value: ContainerDetector},
        DetectorBase: {value: DetectorBase}
    });
}(this);


var Cd = new ContainerDetector("#abc #def #hig");
var Id = new LinkDetector("http//:www.baidu.com http//:www.taobao.com http//:www.douban.com");

Cd.detect();
Id.detect();