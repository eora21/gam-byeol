pipeline {
	agent none
	options { skipDefaultCheckout(false) }
	stages {
		stage('git pull') { 
			agent any
			steps {
				checkout scm
			}
		}
		stage('Docker build') { 
			agent any
			steps {
				sh 'docker build -t frontend:latest ./front_end' 
				sh 'docker build -t backend:latest ./back_end' 

			}
		}
		stage('Docker run') {
			agent any
			steps {
				sh 'docker ps -f name=frontend -q \
        | xargs --no-run-if-empty docker container stop'
				sh 'docker ps -f name=backend -q \
		| xargs --no-run-if-empty docker container stop'

				sh 'docker container ls -a -f name=frontend -q \
        | xargs -r docker container rm'
				sh 'docker container ls -a -f name=backend -q \
		| xargs -r docker container rm'

				sh 'docker images -f dangling=true -q | xargs --no-run-if-empty docker rmi -f'

				sh 'docker run -d --name frontend -p 80:80 -p 443:443 \
				-v /home/ubuntu/docker/jenkins-data/workspace/star-pipeline-cicd/front_end/:/var/jenkins_home/workspace/star-pipeline-cicd/front_end/ \
				-v /etc/letsencrypt:/etc/letsencrypt \
				--network thxstorecicdnetwork \
				-u root frontend'

				sh 'docker run -d --name backend -p 8080:8080 \
				-v /home/ubuntu/docker/jenkins-data/workspace/star-pipeline-cicd/back_end/:/var/jenkins_home/workspace/star-pipeline-cicd/back_end/ \
		--network thxstorecicdnetwork backend:latest'
			}
		}
	}
}
