import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'carbon-components-react';
import { TreeViewAlt16 } from '@carbon/icons-react';
import { useFieldApi } from '@@ddf';
import WorkflowEntryPoints from '../workflows/workflow-entry-points';

const ProvisionEntryPoint = (props) => {
  console.log(props);
  const {
    label, initialValue, id, field, selected, type,
  } = props;
  const { input } = useFieldApi(props);

  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    if (selectedValue && selectedValue.name && selectedValue.name.text) {
      setTextValue(selectedValue.name.text);
    } else {
      setTextValue('');
    }
  }, [selectedValue]);

  useEffect(() => {
    if (selectedValue && selectedValue.name && selectedValue.name.text) {
      selectedValue.name.text = textValue;
    }
    input.onChange(selectedValue);
  }, [textValue]);

  return (
    <div>
      {showModal ? (
        <WorkflowEntryPoints
          field={field}
          selected={selected}
          type={type}
          setShowModal={setShowModal}
          setSelectedValue={setSelectedValue}
        />
      ) : undefined}
      <div className="entry-point-wrapper">
        <div className="entry-point-text-input">
          <TextInput id={id} type="text" labelText={__(label)} onChange={(value) => setTextValue(value.target.value)} value={textValue} />
        </div>
        <div className="entry-point-buttons">
          <Button
            renderIcon={TreeViewAlt16}
            iconDescription={sprintf(__('Click to select %s'), label)}
            hasIconOnly
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    </div>
  );
};
ProvisionEntryPoint.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
  field: PropTypes.string.isRequired,
  selected: PropTypes.string,
  type: PropTypes.string.isRequired,
};

ProvisionEntryPoint.defaultProps = {
  initialValue: '',
  selected: '',
};

export default ProvisionEntryPoint;
