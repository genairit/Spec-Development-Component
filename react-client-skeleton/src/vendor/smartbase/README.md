# Smartbase component source in the React starter

The Button, Card, Switch, Segmented, CheckBox, ProgressBar, NoticeCard, and FieldLabel implementations here were copied from
`Smartbase-Client-Package` commit `8f14318`. The starter's existing control
APIs wrap them so showcase and generated clients retain their props.

Local changes: GenAir blue and white color mapping, TypeScript type imports for the client compiler, reduced motion
rules, and a browser vibration adapter in place of the package's iOS haptics
dependency. The package currently declares MUI 5/6 peers while this starter
uses MUI 9, so the selected source files are carried here until those versions
converge.
