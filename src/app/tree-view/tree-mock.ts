export interface TreeQuestionModel {
  id: string;
  title: string;
  inputType: string;
  value: string | boolean | null;
  hidden: boolean;
  required: boolean;
  showFollowUpValue: boolean | null;
}
export interface TreeNode {
  uuid: string;
  name: string;
  showChildren: boolean;
  children: any[];
  code: string;
  isOpen: boolean;
  active?: boolean;
  question?:TreeQuestionModel
}

const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const NODES: TreeNode[] = [
  {
    uuid: generateUUID(),
    code: 'AFRI',
    name: 'Africa',
    isOpen: true,
    showChildren: false,
    question:{
      "id": "1.1",
      "title": "What would you like us to improve in our service?",
      "value": "",
      "inputType": "text",
      "hidden": true,
      "required": false,
      "showFollowUpValue": false,
    },
    children: [
      {
        uuid: generateUUID(),
        code: 'ALGE',
        name: 'Algeria',
        isOpen: true,
        showChildren: false,
        question:{
          "id": "1.1",
          "title": "What would you like us to improve in our service?",
          "value": "",
          "inputType": "text",
          "hidden": true,
          "required": false,
          "showFollowUpValue": false,
        },
        children: [
          {
            uuid: generateUUID(),
            code: 'ARIS',
            name: 'Algeris',
            isOpen: true,
            showChildren: false,
            question:{
              "id": "1.1",
              "title": "What would you like us to improve in our service?",
              "value": "",
              "inputType": "text",
              "hidden": true,
              "required": false,
              "showFollowUpValue": false,
            },
            children: [],
          },
          {
            uuid: generateUUID(),
            code: 'ACI2',
            name: 'Kazak',
            isOpen: true,
            showChildren: false,
            question:{
              "id": "1.1",
              "title": "What would you like us to improve in our service?",
              "value": "",
              "inputType": "text",
              "hidden": true,
              "required": false,
              "showFollowUpValue": false,
            },
            children: [],
          },
        ],
      },
      {
        uuid: generateUUID(),
        code: 'ANGO',
        name: 'Angola',
        isOpen: true,
        showChildren: false,
        question:{
          "id": "1.1",
          "title": "What would you like us to improve in our service?",
          "value": "",
          "inputType": "text",
          "hidden": true,
          "required": false,
          "showFollowUpValue": false,
        },
        children: [],
      },
      {
        uuid: generateUUID(),
        code: 'BENI',
        name: 'Benin',
        isOpen: true,
        showChildren: false,
        question:{
          "id": "1.1",
          "title": "What would you like us to improve in our service?",
          "value": "",
          "inputType": "text",
          "hidden": true,
          "required": false,
          "showFollowUpValue": false,
        },
        children: [],
      },
    ],
  },
  {
    uuid: generateUUID(),
    code: 'ASIA',
    name: 'Asia',
    isOpen: true,
    showChildren: false,
    question:{
      "id": "1.1",
      "title": "What would you like us to improve in our service?",
      "value": "",
      "inputType": "text",
      "hidden": true,
      "required": false,
      "showFollowUpValue": false,
    },
    children: [
      {
        uuid: generateUUID(),
        code: 'AFGH',
        name: 'Afghanistan',
        isOpen: true,
        showChildren: false,
        question:{
          "id": "1.1",
          "title": "What would you like us to improve in our service?",
          "value": "",
          "inputType": "text",
          "hidden": true,
          "required": false,
          "showFollowUpValue": false,
        },
        children: [
          {
            uuid: generateUUID(),
            code: 'KABU',
            name: 'Kabul',
            isOpen: true,
            showChildren: false,
            question:{
              "id": "1.1",
              "title": "What would you like us to improve in our service?",
              "value": "",
              "inputType": "text",
              "hidden": true,
              "required": false,
              "showFollowUpValue": false,
            },
            children: [],
          },
        ],
      },
      {
        uuid: generateUUID(),
        code: 'ARME',
        name: 'Armenia',
        isOpen: true,
        showChildren: false,
        question:{
          "id": "1.1",
          "title": "What would you like us to improve in our service?",
          "value": "",
          "inputType": "text",
          "hidden": true,
          "required": false,
          "showFollowUpValue": false,
        },
        children: [],
      },
      {
        uuid: generateUUID(),
        code: 'AZER',
        name: 'Azerbaijan',
        showChildren: false,
        question:{
          "id": "1.1",
          "title": "What would you like us to improve in our service?",
          "value": "",
          "inputType": "text",
          "hidden": true,
          "required": false,
          "showFollowUpValue": false,
        },
        children: [],
      },
    ],
  },
  {
    uuid: generateUUID(),
    code: 'EURO',
    name: 'Europe',
    isOpen: true,
    showChildren: false,
    children: [
      {
        uuid: generateUUID(),
        code: 'ROMA',
        name: 'Romania',
        showChildren: false,
        children: [
          {
            uuid: generateUUID(),
            code: 'BUCU',
            name: 'Bucuresti',
            showChildren: false,
            children: [],
          },
        ],
      },
      {
        uuid: generateUUID(),
        code: 'HUNG',
        name: 'Hungary',
        isOpen: true,
        showChildren: false,
        children: [],
      },
      {
        uuid: generateUUID(),
        code: 'BNIN',
        name: 'Benin',
        isOpen: true,
        showChildren: false,
        children: [],
      },
    ],
  },
  {
    uuid: generateUUID(),
    code: 'NOAM',
    name: 'North America',
    showChildren: false,
    isOpen: true,
    children: [],
  },
];
