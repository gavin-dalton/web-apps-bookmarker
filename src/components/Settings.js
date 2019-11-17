import React from 'react';

// const defaultSettings = {
//   header: 'BookMARKER',
//   sort: false
// }

const Settings = (props) => {
  // const [setting, setSettings] = useState(defaultSettings);


  // console.log('Settings: props...', props);

  return (
    <div className="container">
      <div className="border border-warning rounded-lg text-center mt-5 p-3">
        <h4>Settings</h4>
        <p>The settings function is in development and will be available soon.</p>
        <button
          className="btn btn-outline-warning"
          onClick={() => { props.history.goBack() }}
        >Back</button>
      </div>
    </div>
  );
};

export default Settings;
