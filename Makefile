#########################################################################
#                                                                       #
#   Usage:                                                              #
#     make target1 [ target2 ... ]                                      #
#                                                                       #
#   Targets:                                                            #
#     build: Removes all cache and log files                            #
#     clear: Removes all cache and log files                            #
#     config: Generates Symfony2 parameters.yml file                    #
#     composer: Runs Composer install                                   #
#     test-unit: Runs PHPUnit tests                                     #
#     test-functional: Runs PHPUnit functional tests                    #
#     test: Runs all tests                                              #
#       options:                                                        #
#         g (Group)    Run tests on a specific group of tests           #
#                      i.e. make clear test g=functional                #
#         xg (Group)   Run tests excluding a specific group of tests    #
#                      i.e. make clear test xg=functional               #
#                                                                       #
#########################################################################

PHP_BIN ?= php

.SILENT:

install:
	composer install
	npm install

build:
	npm install
	bin/console hshn:npm:instal
	bin/console hshn:npm:run build
	composer up

clear:
	rm -rf build/ var/cache/ var/logs/ var/sessions \
	node_modules/ src/AppBundle/Resources/npm/node_modules/ \
	web/generated

config: clear
	cp app/config/parameters.yml.dist app/config/parameters.yml

composer: config
	composer install

    ifneq (,$(wildcard phpunit.xml.local))
        phpunit_options := -c phpunit.xml.local
    else
        phpunit_options := -c phpunit.xml
    endif

    ifneq (,$(findstring sonar,$(MAKECMDGOALS)))
        phpunit_options := $(phpunit_options) --coverage-clover build/reports/coverage.xml --log-junit build/reports/tests.xml
    endif

test-unit:
	echo "################### UNIT TESTS ###################"
	$(PHP_BIN) bin/phpunit $(phpunit_options) --group unit tests

test-functional:
	echo "################### FUNCTIONAL TESTS ###################"
	$(PHP_BIN) bin/phpunit $(phpunit_options) --group functional tests

    ifdef g # (Group)
        phpunit_options := $(phpunit_options) --group $(g)
    endif

    ifdef xg # (Exclude Group)
        phpunit_options := $(phpunit_options) --exclude-group $(xg)
    endif

test:
	echo "################### $(g) TESTS  ###################"
	$(PHP_BIN) bin/phpunit $(phpunit_options) tests

.PHONY: clear config composer test-unit test-functional test sonar
