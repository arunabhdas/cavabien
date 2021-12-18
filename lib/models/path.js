"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HerokuPath = exports.AWSPath = exports.GCPPath = void 0;
var GCPPath;
(function (GCPPath) {
    GCPPath["ISSUE_TEMPLATE"] = "/gcp/ISSUE_TEMPLATE";
    GCPPath["MERGE_REQUEST_TEMPLATE"] = "/gcp/merge_request_templates";
    GCPPath["PULL_REQUEST_TEMPLATE"] = "/gcp/PULL_REQUEST_TEMPLATE";
})(GCPPath = exports.GCPPath || (exports.GCPPath = {}));
var AWSPath;
(function (AWSPath) {
    AWSPath["ISSUE_TEMPLATE"] = "/aws/issue_templates";
    AWSPath["MERGE_REQUEST_TEMPLATE"] = "/aws/merge_request_templates";
    AWSPath["CI"] = "/aws/ci";
})(AWSPath = exports.AWSPath || (exports.AWSPath = {}));
var HerokuPath;
(function (HerokuPath) {
    HerokuPath["ISSUE_TEMPLATE"] = "/.bitbucket/ISSUE_TEMPLATE";
    HerokuPath["PULL_REQUEST_TEMPLATE"] = "/.bitbucket/PULL_REQUEST_TEMPLATE";
})(HerokuPath = exports.HerokuPath || (exports.HerokuPath = {}));
