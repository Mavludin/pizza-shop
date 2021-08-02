import React, { useEffect } from 'react'
import styles from './LanguageSwitcher.module.css'
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { useTranslation } from 'react-i18next';

const Swicher = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16.5px)",
      color: '#ff6900',
      "& + $track": {
        backgroundColor: '#ffffff',
        opacity: 1,
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
    border: "1px solid #ff6900",
    backgroundColor: '#ff6900'
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export const LanguageSwitcher = () => {

  const { i18n } = useTranslation()

  const handleChange = () => {
    if (i18n.language === 'en') i18n.changeLanguage('ru')
      else i18n.changeLanguage('en')
  }

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages((err, ret) => {
      if (err) return "Couldn't get the languages"
      ret.en.nativeName = 'EN'
      ret.ru.nativeName = 'RU'
    })
  }, [i18n.services.backendConnector.backend])

  return (
    <FormGroup
      classes={{
        root: styles.root
      }}
    >
      <FormControlLabel
        classes={{
          label: styles.label
        }}
        control={
          <Swicher
            checked={i18n.language === 'en'}
            onChange={handleChange}
            name="langSwitch"
          />
        }
        label={i18n.language.toUpperCase()}
      />
    </FormGroup>
  );
}