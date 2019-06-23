## MRZ Form

### Description

The project allows you to generate a MRZ of type TD3 threw a form completion.</br>
Data collected are sent to a frontend service that simulates a call API.</br>
The service call the _mrz-generator_ npm module to process the computing.

NB : I wanted to test the components using enzyme snapshots (especially _FormInput_).
Nevertheless, I faced some issues: Snapshots are empty... It might from jest version (that I can't change because I haven't ejected the app)

### Installation

```
npm install
```

### Development environment

```
npm start
```

### Tests

```
npm test
```
