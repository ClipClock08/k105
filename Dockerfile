FROM ruby:2.6.0

# Install Packages
RUN apt-get update && \
    apt-get install -y build-essential libssl-dev libpq-dev postgresql-client --no-install-recommends && \
    apt-get install -y python python-dev curl unzip && \
    rm -rf /var/lib/apt/lists/*

# install node js
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

RUN mkdir -p /app
WORKDIR /app
COPY . /app

EXPOSE 3000