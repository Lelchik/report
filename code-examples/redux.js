<checkbox
    checked={props.checked}
    onChange={ (e) => dispatch({
        type: 'Change',
        checked: e.target.checked,
    })}
>
    checkbox
</checkbox>
