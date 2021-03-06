# Taurus/Jmeter & CircleCI Integration 
Integrate benchmark test for every builds in circleci and enable reporting in the terminal

# JMeter
Create performance test scripts via jmeter 
1. Install JMeter 
    ```sh 
    $ brew install jmeter 
    ```
2. Launch jmeter 
    ```sh 
    $ jmeter
    ````
3. Create scripts and save (optional: import to repo)

# Taurus 
Integrate jmeter scripts with taurus 
1. Installation will be done in the docker 
2. Create config file with the following properties 
    - Execution 
    - Scenario 
    - Modules
    - Pass/Fail Criteria 

# CircleCI 
Configure repository with circle ci 

#### _Prerequisite_
- Jmeter
- Taurus 

#### _Steps_
1. Add a project in circle ci 
2. Follow steps on how to setup a project 
3. Add Jmeter/Taurus in the job 

    ##### Jmeter
    ```sh
      jmeter_test: 
        docker:
          - image: circleci/openjdk:8-jdk-node-browsers
    
        working_directory: ~/devTings
    
        steps: 
          - checkout
          - run: 
              name: initiate benchmark test
              command: '<jmeter> -n -t <jmeter jmx file>'
    ```
    ##### Taurus   
    ```sh
        taurus_test: 
            docker: 
                - image: circleci/python:2.7-browsers

    working_directory: ~/devTings

    steps: 
      - checkout
      - run: 
          name: 'Install taurus'
          command: 'sudo pip install bzt'
      - run: 
          name: 'Initiate benchmark test'
          command: 'bzt <taurus yml file> -report'
    ```
    
4. Add a workflow 
    ```sh 
     build_deploy: 
    jobs: 
      - build
      - jmeter_test:
          filters: 
            branches: 
              only: master 
          requires: 
            - build
    ```
# CircleCI - Express, Knex and Postgre (POC) 

1. Create database in postgres 
2. Create knex migration scripts to create database structure 
3. Create seed files to import data 
4. Run migration files and seed files 
5. Create API's using express which will retrieve information from database 
6. Test API 
7. Create Jmeter scripts
    - Insert assertions 
    - Disable "Use Keep Alive" 
8. Update circle ci - config.yml 

    ```sh
    - run: 
              name: 'Install Database'
              command: |
                sudo apt-get update 
                sudo apt-get install postgresql-client-9.6
          - run: 
              name: 'Setup Database'
              command: |
                sudo npm install knex -g
                knex migrate:latest
                knex seed:run
          - run: 
              name: 'Start Application'
              command: yarn start
              background: true
          - run: 
              name: 'Install taurus'
              command: 'sudo pip install bzt'
          - run: 
              name: 'Initiate benchmark test'
              command: 'bzt <taurus yml file>'
     ````
     
# React/Knex/PostgreSQL

Reference: 
- https://medium.com/front-end-hacking/calling-express-api-in-react-using-react-script-e19084a76a8a
- https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
- https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556

