"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readme = void 0;
const filename_1 = require("../../models/filename");
const default_template_1 = require("../default/default.template");
function readme() {
    const fileName = filename_1.FileName.README;
    const fileContent = () => {
        return `# Project Title

## Table of Contents
+ [About](#about)
+ [Getting Started](#getting_started)
+ [Usage](#usage)
+ [Contributing](./CONTRIBUTING.md)

## About <a name = "about"></a>
Write about 1-2 paragraphs describing the purpose of your project.

## Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.


### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

And repeat


End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.`;
    };
    return (0, default_template_1.defaultTemplate)(fileName, fileContent());
}
exports.readme = readme;
