import * as PropTypes from 'prop-types';
import * as React from 'react';
import Label from '../Label/Label';
import Icon from '../Icon/Icon';
import { uuid4 } from '../../utils/utils';
import { LABEL_CLASSES, STAT_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 * @uxpinwrappers
 * SkipContainerWrapper
 */

/* eslint-disable */
export default class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuid4() };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      const textareaElement = document.getElementById(this.state.id);

      textareaElement.value = this.props.value;
    }
  }

  render() {
    const info = this.props.info ? (
      <div className={`${STAT_CLASSES.TITLE_HELP}`}>
        <Icon
          uxpId={`infoIcon-${this.state.id}`}
          icon={'circle-info-outline'}
          size="xs"
          color="primary"
          mode="button"
          popover={true}
          popoverTitle={this.props.infoPopoverTitle}
          popoverDescription={this.props.infoPopoverDescription}
          popoverPosition={this.props.infoPopoverPosition}
        />
      </div>
    ) : (
      ''
    );
    const label = this.props.label ? (
      <Label
        htmlFor={this.state.id}
        className="chi-label"
        required={this.props.required}
        label={this.props.label}
      ></Label>
    ) : null;
    const value = this.props.value ? this.props.value : '';
    const helperMessageAttr = this.props.helperMessage ? this.props.helperMessageText : '';

    return (
      <div className="chi-form__item">
        <div className={`${LABEL_CLASSES.WRAPPER}`}>
          {label}
          {info}
        </div>
        <chi-textarea
          id={this.state.id}
          disabled={this.props.disabled}
          size={this.props.size}
          state={
            ['success', 'warning', 'danger'].includes(this.props.helperMessageType) ? this.props.helperMessageType : ''
          }
          icon-left={this.props.iconLeft}
          icon-left-color={this.props.iconLeftColor}
          icon-right={this.props.iconRight}
          icon-right-color={this.props.iconRightColor}
          placeholder={this.props.placeholder}
          helper-message={helperMessageAttr}
          onClick={this.props.click}
          onFocus={this.props.focus}
          onBlur={this.props.focusLost}
          onInput={this.props.input}
          onChange={this.props.change}
          onMouseEnter={this.props.mouseOver}
          onMouseLeave={this.props.mouseLeave}
          onMouseDown={this.props.mouseDown}
          onMouseUp={this.props.mouseUp}
        >
          {value}
        </chi-textarea>
      </div>
    );
  }
}

Textarea.propTypes = {
  /**
   * @uxpinpropname field label
   * */
  label: PropTypes.string,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  helperMessage: PropTypes.bool,
  helperMessageText: PropTypes.string,
  helperMessageType: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
  /**
   * @uxpinpropname info icon
   * */
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname info popover text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  iconLeft: PropTypes.string,
  iconLeftColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  iconRight: PropTypes.string,
  iconRightColor: PropTypes.oneOf(['', 'primary', 'secondary', 'dark', 'light', 'danger', 'grey', 'muted']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  /**
   * @uxpinpropname on click
   * */
  click: PropTypes.func,
  /**
   * @uxpinpropname on focus
   * */
  focus: PropTypes.func,
  /**
   * @uxpinpropname on focus lost
   * */
  focusLost: PropTypes.func,
  /**
   * @uxpinpropname on input
   * */
  input: PropTypes.func,
  /**
   * @uxpinpropname on mouse down
   * */
  mouseDown: PropTypes.func,
  /**
   * @uxpinpropname on mouse over
   * */
  mouseOver: PropTypes.func,
  /**
   * @uxpinpropname on mouse leave
   * */
  mouseLeave: PropTypes.func,
  /**
   * @uxpinpropname on mouse up
   * */
  mouseUp: PropTypes.func,
  /**
   * @uxpinpropname on value change
   * */
  valueChange: PropTypes.func,
};

Textarea.defaultProps = {
  disabled: false,
  required: 'none',
  size: 'md',
  placeholder: '',
  value: '',
  helperMessageType: 'default',
};
