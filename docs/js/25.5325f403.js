"use strict";(self.webpackChunk_mx_design_example=self.webpackChunk_mx_design_example||[]).push([[25],{6898:(n,e,o)=>{o.r(e),o.d(e,{default:()=>g});var t,a=o(2798),d=o(9641),l=o(7059),i=o(2983),c=o(7040),r=o(2359),s=o(3101),u=o(9673),m={code:"\nimport { useModal, Button } from '@mx-design/web';\n\nfunction App() {\n  const Modal = useModal();\n  return (\n    <Button\n      onClick={() => {\n        const modalId = Modal.add({\n          title: 'Modal Title',\n          content: (\n            <div>\n              You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK\n              button.\n            </div>\n          ),\n          visible: true,\n          onCancel: () => Modal.remove(modalId),\n        });\n      }}\n    >\n      Open Modal\n    </Button>\n  );\n}",namespace:r.Bb},p={code:"\nimport { useModal, Button, useMessage } from '@mx-design/web';\n\nfunction App() {\n  const Modal = useModal();\n  const Message = useMessage();\n  return (\n    <Button\n      onClick={() => {\n        const modalId = Modal.add({\n          title: 'Modal Title',\n          content: <div>Form xxx</div>,\n          visible: true,\n          onCancel: () => Modal.remove(modalId),\n          okLoading: false,\n          onOk: () => {\n            Modal.update(modalId, { okLoading: true });\n            new Promise((res) => {\n              setTimeout(() => {\n                res('complete');\n              }, 2000);\n            }).then((data) => {\n              Message.add({\n                type: 'success',\n                content: data,\n              });\n              Modal.remove(modalId);\n            });\n          },\n        });\n      }}\n    >\n      Open Modal with async logic\n    </Button>\n  );\n}",namespace:r.e2},M={code:"\nimport { useModal, Button, Space } from '@mx-design/web';\n\nfunction App() {\n  const Modal = useModal();\n  return (\n    <Space>\n      <Button\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Modal Title',\n            content: (\n              <div>\n                You can customize modal footer\n              </div>\n            ),\n            visible: true,\n            onCancel: () => Modal.remove(modalId),\n            footer: <Button onClick={() => Modal.remove(modalId)}>OK</Button>\n          });\n        }}\n      >\n        Open Modal with customized footer\n      </Button>\n      <Button\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Modal Title',\n            content: (\n              <div>\n                You can customize modal footer\n              </div>\n            ),\n            visible: true,\n            footerAlign: 'left',\n            onCancel: () => Modal.remove(modalId),\n            footer: <Button onClick={() => Modal.remove(modalId)}>I'm left</Button>\n          });\n        }}\n      >\n         Open Modal with customized footer\n      </Button>\n      <Button\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Modal Title',\n            content: (\n              <div>\n                You can customize modal footer\n              </div>\n            ),\n            visible: true,\n            onCancel: () => Modal.remove(modalId),\n            footer: null\n          });\n        }}\n      >\n        Open Modal without footer\n      </Button>\n    </Space>\n  );\n}",namespace:r.$_},v={code:"\nimport { useModal, Button, Space } from '@mx-design/web';\n\nfunction App() {\n  const Modal = useModal();\n  return (\n    <Space>\n      <Button\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Info Modal Title',\n            type: 'info',\n            content: <div>Info Modal</div>,\n            visible: true,\n            hideCancelBtn: true,\n            onCancel: () => Modal.remove(modalId),\n            onOk: () => Modal.remove(modalId),\n          });\n        }}\n      >\n        Info Modal\n      </Button>\n      <Button\n        type=\"brand\"\n        status=\"warning\"\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Warning Modal Title',\n            type: 'warning',\n            content: <div>Warning Modal</div>,\n            visible: true,\n            hideCancelBtn: true,\n            onCancel: () => Modal.remove(modalId),\n            onOk: () => Modal.remove(modalId),\n          });\n        }}\n      >\n        Warning\n      </Button>\n      <Button\n        type=\"brand\"\n        status=\"error\"\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Error Modal Title',\n            type: 'error',\n            content: <div>Error Modal</div>,\n            visible: true,\n            hideCancelBtn: true,\n            onCancel: () => Modal.remove(modalId),\n            onOk: () => Modal.remove(modalId),\n          });\n        }}\n      >\n        Error\n      </Button>\n\n      <Button\n        type=\"brand\"\n        status=\"success\"\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Error Modal Title',\n            type: 'success',\n            content: <div>Success Modal</div>,\n            visible: true,\n            hideCancelBtn: true,\n            onCancel: () => Modal.remove(modalId),\n            onOk: () => Modal.remove(modalId),\n          });\n        }}\n      >\n        Success\n      </Button>\n    </Space>\n  );\n}",namespace:r.x2},f={code:"\nimport { useModal, Space, Button } from '@mx-design/web';\n\nfunction App() {\n  const Modal = useModal();\n  return (\n    <Space>\n      <Button\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Modal Title',\n            content: (\n              <div>\n                Display a modal dialog at 50px to top\n              </div>\n            ),\n            visible: true,\n            themeStyle: { '--modal-top': '50px' },\n            onCancel: () => Modal.remove(modalId),\n          });\n        }}\n      >\n        Display a modal dialog at 50px to top\n      </Button>\n      <Button\n        onClick={() => {\n          const modalId = Modal.add({\n            title: 'Modal Title',\n            content: (\n              <div>\n                Vertically centered modal dialog\n              </div>\n            ),\n            visible: true,\n            themeStyle: { '--modal-top': 'calc(50% - 104px)' },\n            onCancel: () => Modal.remove(modalId),\n          });\n        }}\n      >\n        Vertically centered modal dialog\n      </Button>\n    </Space>\n  );\n}",namespace:r.Ly},b={code:"\nimport { Modal, Button, IconLoading } from '@mx-design/web';\n\nfunction App() {\n  const Modal = useModal();\n  const sleep = async (time) => {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        resolve();\n      }, time);\n    });\n  };\n\n  async function updateModal() {\n    const modalId = Modal.add({\n      title: 'Modal Title',\n      content: (\n        <div style={{ display: 'flex', alignItems: 'center' }}>\n          This modal will close after 1.5s. <IconLoading spin style={{ color: 'var(--brand-color)' }} />\n        </div>\n      ),\n      visible: true,\n      closable: false,\n      footer: null,\n    });\n    await sleep(1500);\n    Modal.update(modalId, {\n      type: 'success',\n      content: 'Update success!',\n    });\n    await sleep(500);\n    Modal.remove(modalId);\n  }\n\n  return <Button onClick={updateModal}>Update message</Button>;\n}",namespace:r.BN},B=(t={},(0,d.Z)(t,m.namespace,m),(0,d.Z)(t,p.namespace,p),(0,d.Z)(t,M.namespace,M),(0,d.Z)(t,v.namespace,v),(0,d.Z)(t,f.namespace,f),(0,d.Z)(t,b.namespace,b),t);function I(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function y(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?I(Object(o),!0).forEach((function(e){(0,d.Z)(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):I(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}const g=function(){var n=(0,s.b)({namespace:r.fB}),e=(0,l.Z)(n,1)[0],o=(0,i.useMemo)((function(){return Object.keys(e).map((function(n){return y(y({},e[n]),B[n])}))}),[e,B]),t=(0,i.useMemo)((function(){return o.map((function(n){return{title:n.title,href:"#".concat(n.namespace)}}))}),[o]);return i.createElement(c.Z,{titleList:t},o.map((function(n){return i.createElement(u.AN,(0,a.Z)({key:n.namespace},n))})))}}}]);