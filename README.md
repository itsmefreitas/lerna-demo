# About this.

This is a hermetic minimum example to illustrate how distinct services and their corresponding packages can share a common script base and be aggregated using Lerna.

## Service1 and Service2

Not much to it, just single express apps with an HTTP GET route at the root, i.e. `/` that you can run separately.

## Installation

From the project's root folder, simply run `yarn install` or `yarn` and the respective packages should install on their own.

## Harnessing the power of Lerna + Workspaces

Using `yarn lint`, Lerna will run the respective lint scripts for the workspaces and, for each of those, using `eslint`, generate a results file in the root of each project/service's folder.

## Future work/vision

Integrate Yarn Workspaces + Lerna with existing source for other projects and perhaps using some of the suggested `eslint` templates included in both subpackages.