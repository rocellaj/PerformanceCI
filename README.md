# Express 
# Knex 
# React 

# PostgreSQL
Create local database 

# Integration 

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
      - run:
          shell: /usr/bin/python2.7
          command:
              import sys
              print(sys.version)
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
