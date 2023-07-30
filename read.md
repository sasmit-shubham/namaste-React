### What is this package.json file?
is basically a configuration of the npm, name of the package, version, in json structure. 
why do we need package.json file?
This bost imp package in our project is a bundler. our whole code needs to be bundled together, minified, 

webpack, parcel, vite these three things are examples of the bundler. it packages your app so that it would be shipped to the production. 

create-react-app behind the scenes uses Webpack bundler and babel as transpiler. 

parcel is easy to configure, 

parcel is one of the best lib out there in, parcel will ignite our app, parcel will give muscle to our app, strenth to the app. 

how do I get parcel bundler?
npm install -D parcel 

-> there is two types of the dependency we can install in our app. one is dev dependency and other is normal dependency. 
minification, chunking, 

parcel is a beast, minification, chunking,  


^caret: for small updates, [suppose today the version of your package is 2.6.5 and tomorrow new minor version update comes then it will update the version automatically]
~tidle: for larger updates [it will install the major version]

what is package-lock.json?
it keeps the record of the exact version of the package. 

what is integrity in the package-lock.json?
it's hash 

node modules is kind of like database in which all the dependency relies that your package needs. 

Transitive dependency: 

if you have package.json and package-lock.json you can recreate your node modules, that's why no need to push the node modules in your github repo. 


whatever you can regenerate don't put on the git, [basic rule]



just 
npm it means we are installing the package  
npx executing a package

cdn link is not preferred way to bring react.com


parcel does lot of things:
1. Dev Build 
2. Local Server
3. hmr - hot module refershement 
4. file watching algorithm 
4. caching 
5. image optimisation
6. bundling
7. minification
8. compress 
9. consistent hashing 
10. code splitting 
11. diffrential bunding 
12. diagnostic 
13. error handling 
14. Tree Shaking [removes unused code for you]


dist - when it generates the developement build it will store it in dist. 

for production cmd: npx parcel build index.html


??????????????????????????????????????????????**Date: 28:07:2023********************** 
uptil lecture 2 we used cmd npx parcel index.html to start our react application. it's bit length process 

so you have to create a script like: "start": "parcel index.html"
npm run start = npm start
npm run build != npm build 

what are react element: which are kind of equivalent to the dom element; 
suppose in the browser you want h1 tag with heading

React.createElement(name_of_tag,{object_that_will_go_as_an_attribute},childerenOfTheHeading) // it's is not an html element it's js object 
when we render this element onto the dom it becomes an html.

object -> html element on rendering

ReactDom.render()

### jsx [we can write without jsx also, but jsx makes the dev life easy]
jsx is html like syntax; It just looks like html but it's not html
is it valid javascript: jsx is not pure js/
your js engine does not understand jsx
jsx gets transpiled before it reaches the js engine 
jsx => react.createElement() => js object => render(js object) => html element
If you have give attribute to the jsx it will use camelCase
if your code is of multiple line wrap your code in parantheses (<h1>wrap your code</h1>)


### Componenet
What is a component:? everything is a component in the react. 
There are two types of the component in the react
1. class based component [old way of using React]
2. functional compoenent [new way of using React]

You should be very good at functional component.

What is REact functional Component?
it's normal js function which returns some piece of jsx, just name it with capital letter 

```
const component = () =>{
    return (
        <div>
            <title/>
            <h1>You are inside functional component</h1>
        </div>
    )
}
```

the above code is an example of the Component composition
nesting one component inside another component


config driven ui: 



## React Hooks 
they are normal js functions. 
### useState : superpower state variables in react 

whenever a state variable updates react rerenders the component/ 
