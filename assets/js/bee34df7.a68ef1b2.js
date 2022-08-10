"use strict";(self.webpackChunkzero_2_hero=self.webpackChunkzero_2_hero||[]).push([[8535],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(t),f=o,d=h["".concat(i,".").concat(f)]||h[f]||p[f]||a;return t?r.createElement(d,s(s({ref:n},u),{},{components:t})):r.createElement(d,s({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1399:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],l={sidebar_position:2},i="Tensorflow",c={unversionedId:"machine-learning/Basics/Tensorflow",id:"machine-learning/Basics/Tensorflow",isDocsHomePage:!1,title:"Tensorflow",description:"TensorFlow is Google\u2019s open source AI framework for machine learning and high performance numerical computation. And it is the most popular one out there.",source:"@site/docs/machine-learning/Basics/Tensorflow.md",sourceDirName:"machine-learning/Basics",slug:"/machine-learning/Basics/Tensorflow",permalink:"/zero2hero/docs/machine-learning/Basics/Tensorflow",editUrl:"https://github.com/sliit-foss/zero2hero/edit/master/docs/machine-learning/Basics/Tensorflow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/zero2hero/docs/machine-learning/Basics/Basics"},next:{title:"Chess-AI",permalink:"/zero2hero/docs/machine-learning/Projects/AI-Projects/Chess-AI"}},u=[{value:"what is Tensorflow",id:"what-is-tensorflow",children:[],level:2},{value:"How tesnorflow works",id:"how-tesnorflow-works",children:[],level:2},{value:"Code Tensors",id:"code-tensors",children:[{value:"Rank 0 / Scale Tensor",id:"rank-0--scale-tensor",children:[],level:3},{value:"Rank 1 / Vector",id:"rank-1--vector",children:[],level:3}],level:2}],p={toc:u};function h(e){var n=e.components,l=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tensorflow"},"Tensorflow"),(0,a.kt)("p",null,"TensorFlow is Google\u2019s open source AI framework for machine learning and high performance numerical computation. And it is the most popular one out there.\nTensorflow includes many packages and tools such as tensorboard, colab, and the What-If tool."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(9579).Z})),(0,a.kt)("p",null,"There are manly two method you can use tensorflow:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Installing locally in anaconda and use with jupyter notebook (",(0,a.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/install"},"https://www.tensorflow.org/install"),")"),(0,a.kt)("li",{parentName:"ol"},"Use google colab (",(0,a.kt)("a",{parentName:"li",href:"https://colab.research.google.com/notebooks/welcome.ipynb"},"https://colab.research.google.com/notebooks/welcome.ipynb"),")")),(0,a.kt)("p",null,"Tensorflow can be either run on CPU or GPU. But if you can it is recommended to run on GPU. Otherwise, training and Evaluations will be slow. Sometimes using GPU can be speed upto 30 - 40 times. So you can understand the difference."),(0,a.kt)("p",null,"TensorFlow also have two version for Javascript and Mobile which is TensorFlow.js for Javascript and TensorFlow lite for Mobile."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2366).Z})),(0,a.kt)("h2",{id:"what-is-tensorflow"},"what is Tensorflow"),(0,a.kt)("p",null,"Tensorflow is open source machine learning platform."),(0,a.kt)("p",null,"what can we do with it?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Image classification"),(0,a.kt)("li",{parentName:"ul"},"Regression"),(0,a.kt)("li",{parentName:"ul"},"Clustering"),(0,a.kt)("li",{parentName:"ul"},"Reinforcement learning"),(0,a.kt)("li",{parentName:"ul"},"Natural language processing"),(0,a.kt)("li",{parentName:"ul"},"Neural networks"),(0,a.kt)("li",{parentName:"ul"},"Deep learning")),(0,a.kt)("p",null,"And list goes on and on."),(0,a.kt)("h2",{id:"how-tesnorflow-works"},"How tesnorflow works"),(0,a.kt)("p",null,"Tensorflow has two main component that we need to undestand first before move on."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Graphs"),(0,a.kt)("li",{parentName:"ul"},"Sessions")),(0,a.kt)("p",null,"TensorFlow has a graph that is the main structure of the model. In graph nothing is stored or computed.\nFor exapmle of we add a varible and say you need to sum this up with another one. What graph do is it stores the operation."),(0,a.kt)("p",null,"What is tensor?"),(0,a.kt)("p",null,"Tensors are simply mathematical objects that can be used to describe physical properties.\nSo they are basically like vectors and scalers."),(0,a.kt)("p",null,"In tensorflow tensors are work like Tensors are multi-dimensional arrays with a uniform type (called a dtype)\nIf you familiar with numpy tesnor are like np.array (numpy array)"),(0,a.kt)("p",null,"Tensors are ranked base on the shape."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"scalar or rank-0 tensor . A scalar contains a single value, and no axes"),(0,a.kt)("li",{parentName:"ul"},"A vector or rank-1 tensor is like a list of values."),(0,a.kt)("li",{parentName:"ul"},"A matrix or rank-2 tensor has two axes")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(6339).Z})),(0,a.kt)("h2",{id:"code-tensors"},"Code Tensors"),(0,a.kt)("p",null,"First we need to import tf and np"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Tensors\n\nimport tensorflow as tf\nimport numpy as np\n")),(0,a.kt)("h3",{id:"rank-0--scale-tensor"},"Rank 0 / Scale Tensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"rank0_tensor = tf.constant(4)\nprint(rank0_tensor)\n")),(0,a.kt)("p",null,"This will output ",(0,a.kt)("inlineCode",{parentName:"p"},"tf.Tensor(4, shape=(), dtype=int32)")),(0,a.kt)("p",null,"So you can see that its type is int32. So its simply a scaler and shape is () (like point)"),(0,a.kt)("h3",{id:"rank-1--vector"},"Rank 1 / Vector"))}h.isMDXComponent=!0},2366:function(e,n){n.Z="data:image/png;base64,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"},6339:function(e,n,t){n.Z=t.p+"assets/images/img_8-c866d9118798e3dd1299fef02b870a24.png"},9579:function(e,n){n.Z="data:image/png;base64,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"}}]);