"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[4148],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4326:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},c="Writing a docker-compose file",l={unversionedId:"docker/docker-compose",id:"docker/docker-compose",isDocsHomePage:!1,title:"Writing a docker-compose file",description:"_To get code for this tutorial click here_",source:"@site/docs/docker/docker-compose.md",sourceDirName:"docker",slug:"/docker/docker-compose",permalink:"/zero2hero/docs/docker/docker-compose",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/docker/docker-compose.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Docker Orientation and Setup",permalink:"/zero2hero/docs/docker/docker"},next:{title:"What is an ORM?",permalink:"/zero2hero/docs/ORM/ORM"}},p=[],u={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-a-docker-compose-file"},"Writing a docker-compose file"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"To get code for this tutorial ",(0,i.kt)("a",{target:"_blank",href:n(7518).Z},"click here")))),(0,i.kt)("p",null,"Let\u2019s create a file called \u201cdocker-compose.yml\u201d at the root folder. As you can see, this is a YAML file, so the indentation is important. Let\u2019s start writing our docker-compose file by setting the version:\n",(0,i.kt)("inlineCode",{parentName:"p"},'version: "3"'),"\nThere are different docker compose versions. All of them, with different features and characteristics. Check the official documentation to know which feature you can use and which feature you can\u2019t. The version \u201c3\u201d has full compatibility with all the syntax we use in this example so that we will stick with this one.\nNow it\u2019s time to define the \u201cservices\u201d section. It\u2019s going to be at the same level of \u201cversion\u201d:\n",(0,i.kt)("inlineCode",{parentName:"p"},"services:"),"\nThis section defines all the containers \u2014 or services \u2014 used by our application (nginx, node, and mongo). Let\u2019s start defining the first \u201cservice\u201d:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"proxy-server:\n   build: ./nginx\n   ports:\n   - 80:80\n")),(0,i.kt)("p",null,"These lines are nested inside the \u201cservices\u201d section we wrote before and describes the Nginx service we will be using as the proxy-reverse server. The \u201cbuild\u201d property indicates where the Dockerfile for this service is located \u2014 in this case, the Nginx Dockerfile \u2014 and the \u201cports\u201d property indicates the ports we want to publish when we run this service.\nIn summary, the past section is equivalent to running \u2014 from the root folder \u2014 the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ cd nginx/\n$ docker build -t nginx-image .\n$ docker run --rm -p 80:80 --name proxy-server nginx-image\n")),(0,i.kt)("p",null,"NOTE: This \u201crun\u201d command will not work at this moment. Since you don\u2019t have a Node API container running in the same virtual network.\nNow let\u2019s define our second service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"app:\n   build: .\n   volumes:\n      - ./public:/opt/app/public\n      - ./routes:/opt/app/routes\n      - ./views:/opt/app/views\n")),(0,i.kt)("p",null,"This is the NodeJS service and is nested inside the \u201cservices\u201d section. Notice how the service name is \u201capp\u201d which matches with the domain\u2019s name we set in our proxy-reverse configuration (http://app:3000/) which means that all the docker-compose services share the same default virtual network and we can use their service names as a DNS to reach them.\nAgain, the \u201cbuild\u201d property indicates the Dockerfile location \u2014 this time is at the root folder. We are not publishing any ports because the proxy-reverse server is taking care of directing all the requests to the API \u2014 using the default shared virtual network. We also have a \u201cvolumes\u201d sub-section where we define \u201cbinding mounts\u201d just like we used to define them using the \u201crun\u201d command.\nIn general lines, this \u201capp\u201d service is equivalent to running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ docker build -t node-image .\n$ docker run --rm --name app -v $(pwd)/public:/opt/app/public -v\n$(pwd)/routes:/opt/app/routes -v $(pwd)/views:/opt/app/views node-image\nAnd now it\u2019s time to define the third and last service:\ndb:\n   image: mongo:latest\n   environment:\n     MONGO_INITDB_ROOT_USERNAME: "root"\n     MONGO_INITDB_ROOT_PASSWORD: "123456"\n   volumes:\n     - "my-mongo-volume:/data/db"\n')),(0,i.kt)("p",null,"The service name is \u201cdb\u201d which matches with the DB hostname we defined in the \u201cindex.js\u201d file (\u201cdb:27017\u201d). This time we are not building any custom image, but pulling it directly from the Docker hub. That\u2019s why we are specifying the image name. We also define some environment variables to set the MongoDB credentials. Notice how they match with the credentials defined in the \u201cindex.js\u201d file (\u201cmongodb//root:1234\u201d). Additionally, we are assigning a custom volume for our database \u2014 we will define this volume in the next section.\nThis \u201cdb\u201d service is equivalent to running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ docker container run -v my-mongo-volume:/data/db --name db -e "MONGO_INITDB_ROOT_USERNAME=root" -e "MONGO_INITDB_ROOT_PASSWORD=123456" mongo:latest\n')),(0,i.kt)("p",null,"We have our three services defined. So we can close the \u201cservices\u201d section. Now let\u2019s create a new \u201cvolumes\u201d section to define the custom volume that our Mongo DB will use. As simple as doing this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"volumes:\n   my-mongo-volume:\n")),(0,i.kt)("p",null,"Which is equivalent to running this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ docker volume create my-mongo-volume\n")),(0,i.kt)("p",null,"And that\u2019s it! Our docker-compose file is complete. Below is the final result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  proxy-server:\n    build: ./nginx\n    ports:\n      - 80:80\n  app:\n    build: .\n    volumes:\n      - ./public:/opt/app/public\n      - ./routes:/opt/app/routes\n      - ./views:/opt/app/views\n  db:\n    image: mongo:latest\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: "root"\n      MONGO_INITDB_ROOT_PASSWORD: "123456"\n    volumes:\n      - "my-mongo-volume:/data/db"\nvolumes:\n  my-mongo-volume:\n')),(0,i.kt)("p",null,"Let\u2019s test this file by running the following command:\n",(0,i.kt)("inlineCode",{parentName:"p"},"$ docker-compose up --build"),"\nNOTE: The build flag is optional. It will force a build every time it detects a change in the docker-compose file."))}d.isMDXComponent=!0},7518:function(e,t,n){t.Z=n.p+"assets/files/docker-compose-example-1316ec8efc82442b0d02d5f81d86cd01.yml"}}]);