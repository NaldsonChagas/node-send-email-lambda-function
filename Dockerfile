FROM public.ecr.aws/lambda/nodejs:16

COPY index.js ${LAMBDA_TASK_ROOT}
COPY config/ ${LAMBDA_TASK_ROOT}/config
COPY email/ ${LAMBDA_TASK_ROOT}/email
COPY package.json ${LAMBDA_TASK_ROOT}
COPY package-lock.json ${LAMBDA_TASK_ROOT}
COPY .env ${LAMBDA_TASK_ROOT}

WORKDIR ${LAMBDA_TASK_ROOT}

RUN npm install

CMD [ "index.handler" ]