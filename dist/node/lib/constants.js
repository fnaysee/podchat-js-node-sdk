"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.systemMessageTypes = exports.inviteeVOidTypes = exports.imageMimeTypes = exports.imageExtentions = exports.createThreadTypes = exports.chatMessageVOTypes = exports.chatMessageTypes = exports.SERVICES_PATH = exports.CHAT_ERRORS = void 0;
var chatMessageVOTypes = {
  CREATE_THREAD: 1,
  MESSAGE: 2,
  SENT: 3,
  DELIVERY: 4,
  SEEN: 5,
  PING: 6,
  BLOCK: 7,
  UNBLOCK: 8,
  LEAVE_THREAD: 9,
  ADD_PARTICIPANT: 11,
  GET_STATUS: 12,
  GET_CONTACTS: 13,
  GET_THREADS: 14,
  GET_HISTORY: 15,
  CHANGE_TYPE: 16,
  REMOVED_FROM_THREAD: 17,
  REMOVE_PARTICIPANT: 18,
  MUTE_THREAD: 19,
  UNMUTE_THREAD: 20,
  UPDATE_THREAD_INFO: 21,
  FORWARD_MESSAGE: 22,
  USER_INFO: 23,
  USER_STATUS: 24,
  GET_BLOCKED: 25,
  RELATION_INFO: 26,
  THREAD_PARTICIPANTS: 27,
  EDIT_MESSAGE: 28,
  DELETE_MESSAGE: 29,
  THREAD_INFO_UPDATED: 30,
  LAST_SEEN_UPDATED: 31,
  GET_MESSAGE_DELEVERY_PARTICIPANTS: 32,
  GET_MESSAGE_SEEN_PARTICIPANTS: 33,
  IS_NAME_AVAILABLE: 34,
  JOIN_THREAD: 39,
  BOT_MESSAGE: 40,
  SPAM_PV_THREAD: 41,
  SET_ROLE_TO_USER: 42,
  REMOVE_ROLE_FROM_USER: 43,
  CLEAR_HISTORY: 44,
  SYSTEM_MESSAGE: 46,
  GET_NOT_SEEN_DURATION: 47,
  PIN_THREAD: 48,
  UNPIN_THREAD: 49,
  PIN_MESSAGE: 50,
  UNPIN_MESSAGE: 51,
  UPDATE_CHAT_PROFILE: 52,
  GET_PARTICIPANT_ROLES: 54,
  GET_REPORT_REASONS: 56,
  REPORT_THREAD: 57,
  REPORT_USER: 58,
  REPORT_MESSAGE: 59,
  GET_CONTACT_NOT_SEEN_DURATION: 60,
  ALL_UNREAD_MESSAGE_COUNT: 61,
  CREATE_BOT: 62,
  DEFINE_BOT_COMMAND: 63,
  START_BOT: 64,
  STOP_BOT: 65,
  LAST_MESSAGE_DELETED: 66,
  LAST_MESSAGE_EDITED: 67,
  BOT_COMMANDS: 68,
  THREAD_ALL_BOTS: 69,
  CALL_REQUEST: 70,
  ACCEPT_CALL: 71,
  REJECT_CALL: 72,
  RECEIVE_CALL_REQUEST: 73,
  START_CALL: 74,
  END_CALL_REQUEST: 75,
  END_CALL: 76,
  GET_CALLS: 77,
  CONTACT_SYNCED: 90,
  GROUP_CALL_REQUEST: 91,
  LEAVE_CALL: 92,
  ADD_CALL_PARTICIPANT: 93,
  CALL_PARTICIPANT_JOINED: 94,
  REMOVE_CALL_PARTICIPANT: 95,
  TERMINATE_CALL: 96,
  MUTE_CALL_PARTICIPANT: 97,
  UNMUTE_CALL_PARTICIPANT: 98,
  LOGOUT: 100,
  ACTIVE_CALL_PARTICIPANTS: 110,
  CALL_SESSION_CREATED: 111,
  TURN_ON_VIDEO_CALL: 113,
  TURN_OFF_VIDEO_CALL: 114,
  RECORD_CALL: 121,
  END_RECORD_CALL: 122,
  DESTINATED_RECORD_CALL: 126,
  ASSISTANT_CALL_STARTED: 127,
  ASSISTANT_CALL_ENDED: 128,
  GET_CALLS_TO_JOIN: 129,
  EXPORT_CHAT: 152,
  SWITCH_TO_GROUP_CALL_REQUEST: 221,
  RECORD_CALL_STARTED: 222,
  ERROR: 999
};
exports.chatMessageVOTypes = chatMessageVOTypes;
var inviteeVOidTypes = {
  TO_BE_USER_SSO_ID: 1,
  TO_BE_USER_CONTACT_ID: 2,
  TO_BE_USER_CELLPHONE_NUMBER: 3,
  TO_BE_USER_USERNAME: 4,
  TO_BE_USER_ID: 5
};
exports.inviteeVOidTypes = inviteeVOidTypes;
var createThreadTypes = {
  NORMAL: 0,
  OWNER_GROUP: 1,
  PUBLIC_GROUP: 2,
  CHANNEL_GROUP: 4,
  CHANNEL: 8,
  NOTIFICATION_CHANNEL: 16,
  SELF: 0x80
};
exports.createThreadTypes = createThreadTypes;
var chatMessageTypes = {
  TEXT: '1',
  VOICE: '2',
  PICTURE: '3',
  VIDEO: '4',
  SOUND: '5',
  FILE: '6',
  POD_SPACE_PICTURE: '7',
  POD_SPACE_VIDEO: '8',
  POD_SPACE_SOUND: '9',
  POD_SPACE_VOICE: '10',
  POD_SPACE_FILE: '11',
  LINK: '12'
};
exports.chatMessageTypes = chatMessageTypes;
var systemMessageTypes = {
  IS_TYPING: '1',
  RECORD_VOICE: '2',
  UPLOAD_PICTURE: '3',
  UPLOAD_VIDEO: '4',
  UPLOAD_SOUND: '5',
  UPLOAD_FILE: '6'
};
exports.systemMessageTypes = systemMessageTypes;
var imageMimeTypes = ['image/bmp', 'image/png', 'image/tiff', 'image/x-icon', 'image/jpeg', 'image/webp'];
exports.imageMimeTypes = imageMimeTypes;
var imageExtentions = ['bmp', 'png', 'tiff', 'tiff2', 'ico', 'jpg', 'jpeg', 'webp'];
exports.imageExtentions = imageExtentions;
var CHAT_ERRORS = {
  // Socket Errors
  6000: 'No Active Device found for this Token!',
  6001: 'Invalid Token!',
  6002: 'User not found!',
  // Get User Info Errors
  6100: 'Cant get UserInfo!',
  6101: 'Getting User Info Retry Count exceeded 5 times; Connection Can Not Been Estabilished!',
  // Http Request Errors
  6200: 'Network Error',
  6201: 'URL is not clarified!',
  // File Uploads Errors
  6300: 'Error in uploading File!',
  6301: 'Not an image!',
  6302: 'No file has been selected!',
  6303: 'File upload has been canceled!',
  6304: 'User Group Hash is needed for file sharing!',
  // Cache Database Errors
  6600: 'Your Environment doesn\'t have Databse compatibility',
  6601: 'Database is not defined! (missing db)',
  6602: 'Database Error',
  // Map Errors
  6700: 'You should Enter a Center Location like {lat: " ", lng: " "}',
  12003: 'Async socket connection failed'
};
exports.CHAT_ERRORS = CHAT_ERRORS;
var SERVICES_PATH = {
  // Grant Devices
  SSO_DEVICES: '/oauth2/grants/devices',
  SSO_GENERATE_KEY: '/handshake/users/',
  SSO_GET_KEY: '/handshake/keys/',
  // Contacts
  ADD_CONTACTS: '/nzh/addContacts',
  UPDATE_CONTACTS: '/nzh/updateContacts',
  REMOVE_CONTACTS: '/nzh/removeContacts',
  SEARCH_CONTACTS: '/nzh/listContacts',
  // File/Image Upload and Download
  UPLOAD_IMAGE: '/nzh/uploadImage',
  GET_IMAGE: '/nzh/image/',
  UPLOAD_FILE: '/nzh/uploadFile',
  GET_FILE: '/nzh/file/',
  // POD Drive Services
  PODSPACE_UPLOAD_FILE_TO_USERGROUP: '/userGroup/uploadFile',
  PODSPACE_UPLOAD_IMAGE_TO_USERGROUP: '/userGroup/uploadImage',
  PODSPACE_UPLOAD_FILE_TO_USERGROUP_NEW: '/api/usergroups/{userGroupHash}/files',
  PODSPACE_UPLOAD_IMAGE_TO_USERGROUP_NEW: '/api/usergroups/{userGroupHash}/images',
  PODSPACE_DOWNLOAD_FILE_NEW: '/api/files/{fileHash}',
  PODSPACE_DOWNLOAD_IMAGE_NEW: '/api/images/{fileHash}',
  PODSPACE_UPLOAD_FILE: '/nzh/drive/uploadFile',
  PODSPACE_UPLOAD_FILE_FROM_URL: '/nzh/drive/uploadFileFromUrl',
  PODSPACE_UPLOAD_IMAGE: '/nzh/drive/uploadImage',
  PODSPACE_DOWNLOAD_FILE: '/nzh/drive/downloadFile',
  PODSPACE_DOWNLOAD_IMAGE: '/nzh/drive/downloadImage',
  // Neshan Map
  REVERSE: '/reverse',
  SEARCH: '/search',
  ROUTING: '/routing',
  STATIC_IMAGE: '/static'
};
exports.SERVICES_PATH = SERVICES_PATH;