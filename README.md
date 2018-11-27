# Purpose 
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
              command: 'benchmark/jmeter/apache-jmeter-5.0/bin/./jmeter -n -t benchmark/scripts/poc_jmeter_2.jmx'
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
          command: 'bzt benchmark/scripts/poc_jmeter_2.yml -report'
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

   
# React/Knex/PostgreSQL

Reference: 
- https://medium.com/front-end-hacking/calling-express-api-in-react-using-react-script-e19084a76a8a
- https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
- https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556

