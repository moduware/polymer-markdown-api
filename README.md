# Polymer Markdown Generator

## Description
Generates markdown out of Polymer element analysis.json file, so it can be used on github or other place

## Installation
To install globally using github repository (This will be publish to npm soon)

```Bash
$ npm install -g moduware/polymer-markdown-generator
```
To install locally in your project using github repository, go to your project directory then:

```Bash
$ npm install moduware/polymer-markdown-generator --save
```
## Usage

To use just type `polymer-md` plus the required file to process must be specified. If you are in the root of your element repo you can do this:

```Bash
$ polymer-md morph-button.html
```

By convention the filename and the element name or tag name is the same. And by default the markdown will be save in **REFERENCE.md** file

To use when the filename is diffetent from the tag name:

```Bash
$ polymer-md --element-name morph-pages morph-pages-elem.html
```

```Bash
$ polymer-md -e morph-pages morph-pages-elem.html
```

To give the option to save to a different files

```Bash
$ polymer-md --output-file DOCS.md morph-button.html
```

```Bash
$ polymer-md -o DOCS.md morph-button.html
```

For help just type `polymer-md -h` or `polymer-md --help`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your code
4. Push to the remote branch
5. Submit a pull request

## License

Apache License Version 2.0, January 2004
