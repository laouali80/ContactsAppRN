# MockFastAPI Server

## Prerequisites

Ensure you have the following installed:

- Python version 3.0 or later.

## Setup Instructions

1. **Install Virtual Environment**

   Use pip to install the virtual environment package:

   ```bash
   pip3 install virtualenv
   ```

2. **Navigate to Project Directory**

   Change into the `mockAuthEndpoint` directory:

   ```bash
   cd mockAuthEndpoint
   ```

3. **Create a Virtual Environment**

   - On Linux/Mac:
     ```bash
     virtualenv venv_folder_name
     ```
   - On Windows:
     ```bash
     python -m venv venv_folder_name
     ```

4. **Activate the Virtual Environment**

   - On Linux/Mac (Command Line):
     ```bash
     source venv_folder_name/bin/activate
     ```
   - On Windows (Command Line):
     ```bash
     venv_folder_name\Scripts\Activate.bat
     ```

5. **Install Dependencies**

   Install the required dependencies using the `requirements.txt` file:

   ```bash
   pip install -r requirements.txt

   ```

6. **Run FastAPI server**

   Make sure your are into the `mockAuthEndpoint` directory and on a seperate CLI than the one running your expo app:

   ```bash
   python main.py

   ```

## Resources

### React Icons

- Install:
  ```bash
  npm install --save react-native-vector-icons
  ```
- Documentation: [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons#installation)

### Tab Navigation

- Install:
  ```bash
  npm install @react-navigation/bottom-tabs
  ```
- Documentation: [Bottom Tab Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/)

### Stack Navigation

- Install:
  ```bash
  npm install @react-navigation/native
  npm install react-native-screens react-native-safe-area-context
  ```
- Documentation: [React Navigation - Getting Started](https://reactnavigation.org/docs/getting-started)

npx expo start -c
