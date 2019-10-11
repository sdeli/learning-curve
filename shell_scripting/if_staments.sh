# ==== IF STATEMENT TUTORIAL ====

# SPACES DO REALLY MATTER IN IF STAMENTS !!!!

# if [ condition ] => old test syntax
# if [[ condition ]] => new test syntax

# [] is a reference to the command test

# ==== OLD TEST STYLE TESTING > string testing ====
# string comparison operators: =, !=, <, and >,
NAME="dave"

if [ "$NAME" = "dave" ]; then
    echo "hy dave"
fi

if [ "$NAME" != "dave2" ]; then
    echo "hy dave"
fi

# -n => not null
if [ -n "$NAME" ]; then
    echo "hy dave is not null"
fi

NULL_NAME=""

# -z => is null
if [ -z "$NULL_NAME" ]; then
    echo "hy null"
fi

# ==== OLD TEST STYLE TESTING > number testing ====
# number comparison operators: -lt -le -gt -ge -eq -ne

num1=1
num2=2
if [ $num1 -eq $num1 ]; then
    echo "num one equals to itself"
fi

if [ $num2 -gt $num1 ]; then
    echo "num two is greater then num one"
fi

# ==== MULTIPLE TESTS ====
if [ $num1 -eq $num1 ] && [ $NAME = "dave" ]; then
  echo "all statments are true"
fi

if [ $num1 -gt $num1 ] || [ $NAME = "dave" ]; then
  echo "one of the statments is true"
fi

# ==== FILE TESTING ====
# -e => file exists
# -f => file is a regular file (not a directory or device file)
# -s => file is not zero size
# -d => file is a directory
# -L => file is a symbolic link
# -r => file is readable
# -O => you are owner of file
FILE_PATH="./if_staments.sh"

if [ -r $FILE_PATH ] && [ -s $FILE_PATH ] && [ -e $FILE_PATH ]
then
  echo "This file is useful."
fi

NOT_EXISTING_FILE_PATH="./if_staments123.sh"
if [ ! -e $NOT_EXISTING_FILE_PATH ]; then
  echo "file doesnt exists"
fi