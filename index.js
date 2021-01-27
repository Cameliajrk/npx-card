#!/usr/bin/env node

const figlet = require('figlet');
const chalk = require('chalk');
const boxen = require('boxen');
const gradient = require('gradient-string');

("            Camélia Jarek")
// Text + chalk definitions
const profile = {
    name: chalk.bold(gradient.pastel("             Camélia Jarek")),
    work: chalk.white("Junior WebDev at BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.cyan("~camelia1994"),
    github: chalk.gray("https://github.com/") + chalk.yellowBright("Cameliajrk"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.magenta("camélia-jarek"),
    labelWork: chalk.white.bold("    Work:"),
    labelNpm: chalk.white.bold("     npm:"),
    labelGitHub: chalk.white.bold("  GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

    figlet('CAMÉLIA', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }

        console.log(gradient.vice(data));
        
        console.log(
            
                boxen(
                    [
                        `${profile.name}`,
                        EMPTYLINE,
                        `${profile.labelWork} ${profile.work}`,
                        EMPTYLINE,
                        `${profile.labelNpm} ${profile.npm}`,
                        `${profile.labelGitHub} ${profile.github}`,
                        `${profile.labelLinkedIn} ${profile.linkedin}`,
                    ].join(NEWLINE),
                    {
                        padding: 1,
                        margin: 1,
                        borderStyle: "double",
                        borderColor: "white",
                    },
                ),
            
        );
        
    });
