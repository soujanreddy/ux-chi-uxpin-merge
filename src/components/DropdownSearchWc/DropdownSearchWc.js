import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import DropdownMenuItems from '../DropdownMenuItems/DropdownMenuItems';
import Label from '../Label/Label';
import { LABEL_CLASSES } from '../../constants/classes';

/**
 * @uxpincomponent
 */
export default function DropdownSearchWc(props) {
  const {
    active,
    animateChevron,
    buttonColor,
    buttonSize,
    buttonType,
    disabled,
    dropdownPosition,
    fieldLabel,
    info,
    infoPopoverTitle,
    infoPopoverDescription,
    infoPopoverPosition,
    required,
    showSearch,
    text,
    visibleItems,
  } = props;

  // #region Methods

  const dropdownRef = useRef(null);

  const getDropdownItems = () => {
    const items = [];
    for (let i = 1; i <= 10; i++) {
      const title = props[`item${i}`];
      if (title) {
        items.push({
          title,
          iconLeft: props[`iconLeft${i}`],
          iconRight: props[`iconRight${i}`],
          description: props[`item${i}Description`],
          onSelect: props[`select${i}`],
        });
      }
    }
    return items;
  };

  const items = getDropdownItems();

  const hasDescription = items.some((item) => item.description);

  const labelElement = fieldLabel && (
    <Label
      required={required}
      label={fieldLabel}
      info={info}
      infoPopoverTitle={infoPopoverTitle}
      infoPopoverDescription={infoPopoverDescription}
      infoPopoverPosition={infoPopoverPosition}
    />
  );
  // #endregion

  // TODO: Visible items is not showing correct number of items as expected when search input is enabled.
  return (
    <>
      <div className={LABEL_CLASSES.WRAPPER}>{labelElement}</div>
      <chi-dropdown
        ref={dropdownRef}
        active={active}
        description={hasDescription ? true : undefined}
        animate-chevron={animateChevron}
        button={text}
        color={buttonColor}
        disabled={disabled}
        position={dropdownPosition}
        visible-items={visibleItems}
        size={buttonSize}
        variant={buttonType}
      >
        {showSearch && <chi-search-input placeholder="Search" slot="menu"></chi-search-input>}
        <DropdownMenuItems items={items} />
      </chi-dropdown>
    </>
  );
}

// #region PropTypes
DropdownSearchWc.propTypes = {
  fieldLabel: PropTypes.string,
  active: PropTypes.bool,
  showSearch: PropTypes.bool,
  animateChevron: PropTypes.bool,
  retainSelection: PropTypes.bool,
  scrollItems: PropTypes.bool,
  visibleItems: PropTypes.number,
  text: PropTypes.string,
  syncTextWithSelectedItem: PropTypes.bool,
  buttonColor: PropTypes.oneOf(['base', 'primary', 'secondary', 'danger', 'dark', 'light']),
  buttonType: PropTypes.oneOf(['solid', 'outline', 'flat']),
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  required: PropTypes.oneOf(['none', 'required', 'optional']),
  info: PropTypes.bool,
  infoPopoverTitle: PropTypes.string,
  /**
   * @uxpinpropname text
   * @uxpincontroltype textfield(10)
   * */
  infoPopoverDescription: PropTypes.string,
  infoPopoverPosition: PropTypes.oneOf(['right-start', 'top']),
  dropdownHeight: PropTypes.string,
  dropdownFixedWidth: PropTypes.string,
  dropdownPosition: PropTypes.oneOf([
    'top-start',
    'top',
    'top-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
  ]),
  selectedItem: PropTypes.oneOf(['None', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  item4: PropTypes.string,
  item5: PropTypes.string,
  item6: PropTypes.string,
  item7: PropTypes.string,
  item8: PropTypes.string,
  item9: PropTypes.string,
  item10: PropTypes.string,
  item11: PropTypes.string,
  item12: PropTypes.string,
  item13: PropTypes.string,
  item14: PropTypes.string,
  item15: PropTypes.string,
  iconLeft1: PropTypes.string,
  iconRight1: PropTypes.string,
  iconLeft2: PropTypes.string,
  iconRight2: PropTypes.string,
  iconLeft3: PropTypes.string,
  iconRight3: PropTypes.string,
  iconLeft4: PropTypes.string,
  iconRight4: PropTypes.string,
  iconLeft5: PropTypes.string,
  iconRight5: PropTypes.string,
  iconLeft6: PropTypes.string,
  iconRight6: PropTypes.string,
  iconLeft7: PropTypes.string,
  iconRight7: PropTypes.string,
  iconLeft8: PropTypes.string,
  iconRight8: PropTypes.string,
  iconLeft9: PropTypes.string,
  iconRight9: PropTypes.string,
  iconLeft10: PropTypes.string,
  iconRight10: PropTypes.string,
  iconLeft11: PropTypes.string,
  iconRight11: PropTypes.string,
  iconLeft12: PropTypes.string,
  iconRight12: PropTypes.string,
  iconLeft13: PropTypes.string,
  iconRight13: PropTypes.string,
  iconLeft14: PropTypes.string,
  iconRight14: PropTypes.string,
  iconLeft15: PropTypes.string,
  iconRight15: PropTypes.string,
  buttonClick: PropTypes.func,
  select1: PropTypes.func,
  select2: PropTypes.func,
  select3: PropTypes.func,
  select4: PropTypes.func,
  select5: PropTypes.func,
  select6: PropTypes.func,
  select7: PropTypes.func,
  select8: PropTypes.func,
  select9: PropTypes.func,
  select10: PropTypes.func,
  select11: PropTypes.func,
  select12: PropTypes.func,
  select13: PropTypes.func,
  select14: PropTypes.func,
  select15: PropTypes.func,
};

DropdownSearchWc.defaultProps = {
  active: false,
  selectedItem: 1,
  text: 'Dropdown component',
};
// #endregion
