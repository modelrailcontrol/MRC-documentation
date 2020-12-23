---
title: Contribute to MRC
---
There are several ways you can contribute to the Model Rail Control project.

## For anyone
Even if you have no coding skills or just want to contribute in other ways, there are many things you can get involved in.


### Ask a question
To ask a question about MRC you can:
 - Look at our MRC web site to see if you can find the answer
 - Send us an email
 - Use Github Issues

We still doesn't have an official message board, chat channel or FAQ, but if demand grows this could be something we start up.


### Report bugs
Ensure the bug was not already reported by searching on GitHub under Issues.

If you can't find an open issue addressing the problem, please open a new one:
 - Determine which repository the problem should be reported in
 - Be sure to include a title and clear description
 - For software, include the application version number (e.g v1.0.2)
 - Add as much relevant information as possible
 - Maybe add a code sample to show where the code is not behaving correctly


### Feature request
First ensure the feature/enhancement request was not already reported by searching on GitHub under Issues. If not, you can open a new issue for the request:
 - Determine which repository the problem should be reported in
 - Be sure to include a clear and descriptive title
 - Provide a clear (step-by-step) description of the suggested enhancement
 - Provide a specific example to demonstrate the feature
 - Explain why this enhancement would be useful


### Enhance documentation
We have two types of documentation; the one describing the code and the information you find on our web site.

Both are hosted on Github and contibutions can be done via pull requests. You can also submit an issues and tells us your findings and suggestions.

Our website is based on Docusaurus and uses Markdown to format the text, thus making it quite easy to maintain.


### Handle issues (and pull requests)
One great way you can contribute to the project without writing any code is to help handling issues and pull requests as they come in.
 - Ask for more information if you believe the issue does not provide all the details required to solve it
 - Suggest labels that can help categorize issues
 - Flag issues that are stale or that should be closed
 - Ask for testing and code review


##  For coders
If you have some coding skills you are welcome to contribute in more ways.


### Fixing issues
You are always welcome to help out with issues!

The best way to do this is to fix them and make a pull request like this:
 - Create a personal fork of the project on Github.
 - Clone the fork on your local machine. Your remote repo on Github is called `origin`.
 - Add the original repository as a remote called `upstream`.
 - If you created your fork a while ago be sure to pull upstream changes into your local repository.
 - Create a new branch to work on! Branch from `develop` if it exists, else from `master`.
 - Implement/fix your feature, comment your code, see Submitting changes below.
 - Follow the code style of the project, including indentation.
 - Add or change the documentation as needed.
 - Push your branch to your fork on Github, the remote `origin`.
 - From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, else go for `master`!


### Submitting changes
Please send a GitHub Pull Request with a clear list of what you've done and follow our coding guidelines.

This is open source software. Consider the people who will read your code and make it look nice and readable for them.

- We indent using two spaces (soft tabs)
- We put spaces after list items and method parameters ([1, 2, 3], not [1,2,3]) and around operators (x += 1, not x+=1).
- We put the starting paranthesis on the same row as the function and the finishing paranthesis with the same indent:

```
void function () {
    // Some function
}
```

Also make sure you just include one feature per commit.


### Commit messages
Always write a clear log message for your commits. 
 - Use the present tense ("Add feature" not "Added feature")
 - Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
 - Limit the first line to 72 characters or less

Always start the commit message with the following tags:
- *chore:* Not a code change but change of dependencies, libraries and things like that
- *feat:* A new feature
- *fix:* A bug fix
- *perf:* A code change that improves performance
- *refactor:* A code change that neither fixes a bug nor adds a feature
- *style:* Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- *docs:* Only changes to code documentation

One-line messages are fine for small changes:
```
$ git commit -m "A brief summary of the commit"
```

..but bigger changes should have a commit message looking like this:

```
$ git commit -m "A brief summary of the commit
> 
> A paragraph describing what changed and its impact."
```

### Versioning
We use the Semantic Versioning Specification with version numbers like MAJOR.MINOR.PATCH, e.g 1.0.2 or 1.2.0. This is how it works:

 - Increment MAJOR version when we make incompatible API changes
 - Increment MINOR version when we add functionality in a backwards compatible manner
 - Increment PATCH version when we make backwards compatible bug fixes

Each element must increase numerically, for instance: 1.9.0 -> 1.10.0 -> 1.11.0

Additional labels for pre-releases are available as extensions to the MAJOR.MINOR.PATCH format. We do this by appending a hyphen and a series of dot separated identifiers, like this:

 - alpha.NUMBER
 - beta.NUMBER

Where NUMBER increments +1 for every alpha or beta release.


