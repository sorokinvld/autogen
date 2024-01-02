"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[171],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},f=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,f=r(e,["components","mdxType","originalType","parentName"]),m=s(i),u=a,d=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return i?n.createElement(d,o(o({ref:t},f),{},{components:i})):n.createElement(d,o({ref:t},f))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var s=2;s<l;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},4787:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=i(3117),a=(i(7294),i(3905));const l={sidebar_label:"openai_utils",title:"oai.openai_utils"},o=void 0,r={unversionedId:"reference/oai/openai_utils",id:"reference/oai/openai_utils",isDocsHomePage:!1,title:"oai.openai_utils",description:"get\\_key",source:"@site/docs/reference/oai/openai_utils.md",sourceDirName:"reference/oai",slug:"/reference/oai/openai_utils",permalink:"/autogen/docs/reference/oai/openai_utils",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/oai/openai_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"openai_utils",title:"oai.openai_utils"},sidebar:"referenceSideBar",previous:{title:"completion",permalink:"/autogen/docs/reference/oai/completion"},next:{title:"code_utils",permalink:"/autogen/docs/reference/code_utils"}},p=[{value:"get_key",id:"get_key",children:[],level:4},{value:"get_config_list",id:"get_config_list",children:[],level:4},{value:"config_list_openai_aoai",id:"config_list_openai_aoai",children:[],level:4},{value:"config_list_from_models",id:"config_list_from_models",children:[],level:4},{value:"config_list_gpt4_gpt35",id:"config_list_gpt4_gpt35",children:[],level:4},{value:"filter_config",id:"filter_config",children:[],level:4},{value:"config_list_from_json",id:"config_list_from_json",children:[],level:4},{value:"get_config",id:"get_config",children:[],level:4},{value:"config_list_from_dotenv",id:"config_list_from_dotenv",children:[],level:4},{value:"retrieve_assistants_by_name",id:"retrieve_assistants_by_name",children:[],level:4}],s={toc:p};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"get_key"},"get","_","key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_key(config)\n")),(0,a.kt)("p",null,"Get a unique identifier of a configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config")," ",(0,a.kt)("em",{parentName:"li"},"dict or list")," - A configuration.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tuple")," - A unique identifier which can be used as a key for a dict.")),(0,a.kt)("h4",{id:"get_config_list"},"get","_","config","_","list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_config_list(api_keys: List,\n                    base_urls: Optional[List] = None,\n                    api_type: Optional[str] = None,\n                    api_version: Optional[str] = None) -> List[Dict]\n")),(0,a.kt)("p",null,"Get a list of configs for OpenAI API client."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_keys")," ",(0,a.kt)("em",{parentName:"li"},"list")," - The api keys for openai api calls."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"base_urls")," ",(0,a.kt)("em",{parentName:"li"},"list, optional")," - The api bases for openai api calls. If provided, should match the length of api_keys."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_type")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The api type for openai api calls."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_version")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The api version for openai api calls.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")," - A list of configs for OepnAI API calls.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Define a list of API keys\napi_keys = ['key1', 'key2', 'key3']\n\n# Optionally, define a list of base URLs corresponding to each API key\nbase_urls = ['https://api.service1.com', 'https://api.service2.com', 'https://api.service3.com']\n\n# Optionally, define the API type and version if they are common for all keys\napi_type = 'azure'\napi_version = '2023-08-01-preview'\n\n# Call the get_config_list function to get a list of configuration dictionaries\nconfig_list = get_config_list(api_keys, base_urls, api_type, api_version)\n")),(0,a.kt)("h4",{id:"config_list_openai_aoai"},"config","_","list","_","openai","_","aoai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def config_list_openai_aoai(\n        key_file_path: Optional[str] = ".",\n        openai_api_key_file: Optional[str] = "key_openai.txt",\n        aoai_api_key_file: Optional[str] = "key_aoai.txt",\n        openai_api_base_file: Optional[str] = "base_openai.txt",\n        aoai_api_base_file: Optional[str] = "base_aoai.txt",\n        exclude: Optional[str] = None) -> List[Dict]\n')),(0,a.kt)("p",null,"Get a list of configs for OpenAI API client (including Azure or local model deployments that support OpenAI's chat completion API)."),(0,a.kt)("p",null,"This function constructs configurations by reading API keys and base URLs from environment variables or text files.\nIt supports configurations for both OpenAI and Azure OpenAI services, allowing for the exclusion of one or the other.\nWhen text files are used, the environment variables will be overwritten.\nTo prevent text files from being used, set the corresponding file name to None.\nOr set key_file_path to None to disallow reading from text files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key_file_path")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The directory path where the API key files are located. Defaults to the current directory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openai_api_key_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The filename containing the OpenAI API key. Defaults to 'key_openai.txt'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aoai_api_key_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The filename containing the Azure OpenAI API key. Defaults to 'key_aoai.txt'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openai_api_base_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The filename containing the OpenAI API base URL. Defaults to 'base_openai.txt'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aoai_api_base_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The filename containing the Azure OpenAI API base URL. Defaults to 'base_aoai.txt'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exclude")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The API type to exclude from the configuration list. Can be 'openai' or 'aoai'. Defaults to None.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"List[Dict]")," - A list of configuration dictionaries. Each dictionary contains keys for 'api_key', 'base_url', 'api_type',\nand 'api_version'.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Raises"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FileNotFoundError")," - If the specified key files are not found and the corresponding API key is not set in the environment variables.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("h1",{id:"to-generate-configurations-excluding-azure-openai"},"To generate configurations excluding Azure OpenAI:"),(0,a.kt)("p",null,"  configs = config_list_openai_aoai(exclude='aoai')"),(0,a.kt)("p",null,"  File samples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"key_aoai.txt"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"aoai-12345abcdef67890ghijklmnopqr\naoai-09876zyxwvuts54321fedcba\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"base_aoai.txt"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"https://api.azure.com/v1\nhttps://api.azure2.com/v1\n")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The function checks for API keys and base URLs in the following environment variables: 'OPENAI_API_KEY', 'AZURE_OPENAI_API_KEY',\n'OPENAI_API_BASE' and 'AZURE_OPENAI_API_BASE'. If these are not found, it attempts to read from the specified files in the\n'key_file_path' directory."),(0,a.kt)("li",{parentName:"ul"},"The API version for Azure configurations is set to DEFAULT_AZURE_API_VERSION by default."),(0,a.kt)("li",{parentName:"ul"},"If 'exclude' is set to 'openai', only Azure OpenAI configurations are returned, and vice versa."),(0,a.kt)("li",{parentName:"ul"},"The function assumes that the API keys and base URLs in the environment variables are separated by new lines if there are\nmultiple entries.")),(0,a.kt)("h4",{id:"config_list_from_models"},"config","_","list","_","from","_","models"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def config_list_from_models(\n        key_file_path: Optional[str] = ".",\n        openai_api_key_file: Optional[str] = "key_openai.txt",\n        aoai_api_key_file: Optional[str] = "key_aoai.txt",\n        aoai_api_base_file: Optional[str] = "base_aoai.txt",\n        exclude: Optional[str] = None,\n        model_list: Optional[list] = None) -> List[Dict]\n')),(0,a.kt)("p",null,"Get a list of configs for API calls with models specified in the model list."),(0,a.kt)("p",null,"This function extends ",(0,a.kt)("inlineCode",{parentName:"p"},"config_list_openai_aoai")," by allowing to clone its' out for each fof the models provided.\nEach configuration will have a 'model' key with the model name as its value. This is particularly useful when\nall endpoints have same set of models."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key_file_path")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The path to the key files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openai_api_key_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The file name of the OpenAI API key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aoai_api_key_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The file name of the Azure OpenAI API key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aoai_api_base_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The file name of the Azure OpenAI API base."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exclude")," ",(0,a.kt)("em",{parentName:"li"},"str, optional"),' - The API type to exclude, "openai" or "aoai".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"model_list")," ",(0,a.kt)("em",{parentName:"li"},"list, optional")," - The list of model names to include in the configs.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")," - A list of configs for OpenAI API calls, each including model information.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    # Define the path where the API key files are located\n    key_file_path = '/path/to/key/files'\n\n    # Define the file names for the OpenAI and Azure OpenAI API keys and bases\n    openai_api_key_file = 'key_openai.txt'\n    aoai_api_key_file = 'key_aoai.txt'\n    aoai_api_base_file = 'base_aoai.txt'\n\n    # Define the list of models for which to create configurations\n    model_list = ['gpt-4', 'gpt-3.5-turbo']\n\n    # Call the function to get a list of configuration dictionaries\n    config_list = config_list_from_models(\n        key_file_path=key_file_path,\n        openai_api_key_file=openai_api_key_file,\n        aoai_api_key_file=aoai_api_key_file,\n        aoai_api_base_file=aoai_api_base_file,\n        model_list=model_list\n    )\n\n    # The `config_list` will contain configurations for the specified models, for example:\n    # [\n    #     {'api_key': '...', 'base_url': 'https://api.openai.com', 'model': 'gpt-4'},\n    #     {'api_key': '...', 'base_url': 'https://api.openai.com', 'model': 'gpt-3.5-turbo'}\n    # ]\n")),(0,a.kt)("h4",{id:"config_list_gpt4_gpt35"},"config","_","list","_","gpt4","_","gpt35"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def config_list_gpt4_gpt35(\n        key_file_path: Optional[str] = ".",\n        openai_api_key_file: Optional[str] = "key_openai.txt",\n        aoai_api_key_file: Optional[str] = "key_aoai.txt",\n        aoai_api_base_file: Optional[str] = "base_aoai.txt",\n        exclude: Optional[str] = None) -> List[Dict]\n')),(0,a.kt)("p",null,"Get a list of configs for 'gpt-4' followed by 'gpt-3.5-turbo' API calls."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key_file_path")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The path to the key files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openai_api_key_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The file name of the openai api key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aoai_api_key_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The file name of the azure openai api key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aoai_api_base_file")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The file name of the azure openai api base."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exclude")," ",(0,a.kt)("em",{parentName:"li"},"str, optional"),' - The api type to exclude, "openai" or "aoai".')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")," - A list of configs for openai api calls.")),(0,a.kt)("h4",{id:"filter_config"},"filter","_","config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def filter_config(config_list, filter_dict)\n")),(0,a.kt)("p",null,"This function filters ",(0,a.kt)("inlineCode",{parentName:"p"},"config_list")," by checking each configuration dictionary against the\ncriteria specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_dict"),". A configuration dictionary is retained if for every\nkey in ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_dict"),", see example below."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_list")," ",(0,a.kt)("em",{parentName:"li"},"list of dict")," - A list of configuration dictionaries to be filtered."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict")," ",(0,a.kt)("em",{parentName:"li"},"dict")," - A dictionary representing the filter criteria, where each key is a\nfield name to check within the configuration dictionaries, and the\ncorresponding value is a list of acceptable values for that field.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  list of dict: A list of configuration dictionaries that meet all the criteria specified\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_dict"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    # Example configuration list with various models and API types\n    configs = [\n        {'model': 'gpt-3.5-turbo', 'api_type': 'openai'},\n        {'model': 'gpt-4', 'api_type': 'openai'},\n        {'model': 'gpt-3.5-turbo', 'api_type': 'azure'},\n    ]\n\n    # Define filter criteria to select configurations for the 'gpt-3.5-turbo' model\n    # that are also using the 'openai' API type\n    filter_criteria = {\n        'model': ['gpt-3.5-turbo'],  # Only accept configurations for 'gpt-3.5-turbo'\n        'api_type': ['openai']       # Only accept configurations for 'openai' API type\n    }\n\n    # Apply the filter to the configuration list\n    filtered_configs = filter_config(configs, filter_criteria)\n\n    # The resulting `filtered_configs` will be:\n    # [{'model': 'gpt-3.5-turbo', 'api_type': 'openai'}]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict")," is empty or None, no filtering is applied and ",(0,a.kt)("inlineCode",{parentName:"li"},"config_list")," is returned as is."),(0,a.kt)("li",{parentName:"ul"},"If a configuration dictionary in ",(0,a.kt)("inlineCode",{parentName:"li"},"config_list")," does not contain a key specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict"),",\nit is considered a non-match and is excluded from the result."),(0,a.kt)("li",{parentName:"ul"},"If the list of acceptable values for a key in ",(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict")," includes None, then configuration\ndictionaries that do not have that key will also be considered a match.")),(0,a.kt)("h4",{id:"config_list_from_json"},"config","_","list","_","from","_","json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def config_list_from_json(\n    env_or_file: str,\n    file_location: Optional[str] = "",\n    filter_dict: Optional[Dict[str, Union[List[Union[str, None]],\n                                          Set[Union[str, None]]]]] = None\n) -> List[Dict]\n')),(0,a.kt)("p",null,"Retrieves a list of API configurations from a JSON stored in an environment variable or a file."),(0,a.kt)("p",null,"This function attempts to parse JSON data from the given ",(0,a.kt)("inlineCode",{parentName:"p"},"env_or_file")," parameter. If ",(0,a.kt)("inlineCode",{parentName:"p"},"env_or_file")," is an\nenvironment variable containing JSON data, it will be used directly. Otherwise, it is assumed to be a filename,\nand the function will attempt to read the file from the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"file_location"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_dict")," parameter allows for filtering the configurations based on specified criteria. Each key in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"filter_dict")," corresponds to a field in the configuration dictionaries, and the associated value is a list or set\nof acceptable values for that field. If a field is missing in a configuration and ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," is included in the list\nof acceptable values for that field, the configuration will still be considered a match."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"env_or_file")," ",(0,a.kt)("em",{parentName:"li"},"str")," - The name of the environment variable or the filename containing the JSON data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file_location")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The directory path where the file is located, if ",(0,a.kt)("inlineCode",{parentName:"li"},"env_or_file")," is a filename."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict")," ",(0,a.kt)("em",{parentName:"li"},"dict, optional")," - A dictionary specifying the filtering criteria for the configurations, with\nkeys representing field names and values being lists or sets of acceptable values for those fields.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# Suppose we have an environment variable \'CONFIG_JSON\' with the following content:\n# \'[{"model": "gpt-3.5-turbo", "api_type": "openai"}, {"model": "gpt-4", "api_type": "openai"}]\'\n\n# We can retrieve a filtered list of configurations like this:\nfilter_criteria = {"api_type": ["openai"], "model": ["gpt-3.5-turbo"]}\nconfigs = config_list_from_json(\'CONFIG_JSON\', filter_dict=filter_criteria)\n# The \'configs\' variable will now contain only the configurations that match the filter criteria.\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"List[Dict]")," - A list of configuration dictionaries that match the filtering criteria specified in ",(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict"),".")),(0,a.kt)("h4",{id:"get_config"},"get","_","config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_config(api_key: str,\n               base_url: Optional[str] = None,\n               api_type: Optional[str] = None,\n               api_version: Optional[str] = None) -> Dict\n")),(0,a.kt)("p",null,"Constructs a configuration dictionary for a single model with the provided API configurations."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'config = get_config(\n    api_key="sk-abcdef1234567890",\n    base_url="https://api.openai.com",\n    api_type="openai",\n    api_version="v1"\n)\n# The \'config\' variable will now contain:\n# {\n#     "api_key": "sk-abcdef1234567890",\n#     "base_url": "https://api.openai.com",\n#     "api_type": "openai",\n#     "api_version": "v1"\n# }\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_key")," ",(0,a.kt)("em",{parentName:"li"},"str")," - The API key for authenticating API requests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"base_url")," ",(0,a.kt)("em",{parentName:"li"},"Optional","[str]")," - The base URL of the API. If not provided, defaults to None."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_type")," ",(0,a.kt)("em",{parentName:"li"},"Optional","[str]")," - The type of API. If not provided, defaults to None."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"api_version")," ",(0,a.kt)("em",{parentName:"li"},"Optional","[str]")," - The version of the API. If not provided, defaults to None.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dict")," - A dictionary containing the provided API configurations.")),(0,a.kt)("h4",{id:"config_list_from_dotenv"},"config","_","list","_","from","_","dotenv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def config_list_from_dotenv(\n    dotenv_file_path: Optional[str] = None,\n    model_api_key_map: Optional[dict] = None,\n    filter_dict: Optional[dict] = None\n) -> List[Dict[str, Union[str, Set[str]]]]\n")),(0,a.kt)("p",null,"Load API configurations from a specified .env file or environment variables and construct a list of configurations."),(0,a.kt)("p",null,"This function will:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Load API keys from a provided .env file or from existing environment variables."),(0,a.kt)("li",{parentName:"ul"},"Create a configuration dictionary for each model using the API keys and additional configurations."),(0,a.kt)("li",{parentName:"ul"},"Filter and return the configurations based on provided filters.")),(0,a.kt)("p",null,"model_api_key_map will default to ",(0,a.kt)("inlineCode",{parentName:"p"},'{"gpt-4": "OPENAI_API_KEY", "gpt-3.5-turbo": "OPENAI_API_KEY"}')," if none"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dotenv_file_path")," ",(0,a.kt)("em",{parentName:"li"},"str, optional")," - The path to the .env file. Defaults to None."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"model_api_key_map")," ",(0,a.kt)("em",{parentName:"li"},"str/dict, optional")," - A dictionary mapping models to their API key configurations.\nIf a string is provided as configuration, it is considered as an environment\nvariable name storing the API key.\nIf a dict is provided, it should contain at least 'api_key_env_var' key,\nand optionally other API configurations like 'base_url', 'api_type', and 'api_version'.\nDefaults to a basic map with 'gpt-4' and 'gpt-3.5-turbo' mapped to 'OPENAI_API_KEY'."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter_dict")," ",(0,a.kt)("em",{parentName:"li"},"dict, optional")," - A dictionary containing the models to be loaded.\nContaining a 'model' key mapped to a set of model names to be loaded.\nDefaults to None, which loads all found configurations.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  List[Dict[str, Union[str, Set","[str]","]]]: A list of configuration dictionaries for each model."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Raises"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FileNotFoundError")," - If the specified .env file does not exist."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TypeError")," - If an unsupported type of configuration is provided in model_api_key_map.")),(0,a.kt)("h4",{id:"retrieve_assistants_by_name"},"retrieve","_","assistants","_","by","_","name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def retrieve_assistants_by_name(client: OpenAI, name: str) -> List[Assistant]\n")),(0,a.kt)("p",null,"Return the assistants with the given name from OAI assistant API"))}f.isMDXComponent=!0}}]);