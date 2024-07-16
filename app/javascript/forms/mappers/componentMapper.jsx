import React from 'react';
import { componentMapper } from '@data-driven-forms/carbon-component-mapper';
import { componentTypes } from '@@ddf';
import AsyncCredentials from '../../components/async-credentials/async-credentials';
import EditPasswordField from '../../components/async-credentials/edit-password-field';
import FileUploadComponent from '../../components/file-upload';
import PasswordField from '../../components/async-credentials/password-field';
import Select from '../../components/select';
import CodeEditor from '../../components/code-editor';
import { TreeViewField, TreeViewSelector } from '../../components/tree-view';
import MultiSelectWithSelectAll from '../../components/multiselect-with-selectall';
import FontIconPicker from '../../components/fonticon-picker';
import FontIconPickerDdf from '../../components/fonticon-picker/font-icon-picker-ddf';
import EmbeddedEntryPoint from '../../components/embedded-entry-point';

const mapper = {
  ...componentMapper,
  'code-editor': CodeEditor,
  'edit-password-field': EditPasswordField,
  'file-upload': FileUploadComponent,
  'password-field': PasswordField,
  'embedded-entry-point': EmbeddedEntryPoint,
  'validate-credentials': AsyncCredentials,
  'tree-view': TreeViewField,
  'tree-selector': TreeViewSelector,
  [componentTypes.SELECT]: Select,
  'multi-select': MultiSelectWithSelectAll,
  'font-icon-picker': FontIconPicker,
  'font-icon-picker-ddf': FontIconPickerDdf, // used for react form pages
};

export default mapper;
