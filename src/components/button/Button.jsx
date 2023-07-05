import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button className={`btn ${props.className}`} onclick={props.onclick ? () => props.onclick() : null}>
        {props.children}
    </button>
  )
}

export const OutlineButton = props => {
    return (
        <button className={`btn-outline ${props.className}`} onclick={props.onclick ? () => props.onclick() : null}>
            {props.children}
        </button>
    );
}

Button.propTypes = {
    onclick: PropTypes.func
}

export default Button;