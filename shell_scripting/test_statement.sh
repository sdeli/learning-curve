# ==== TEST STAMENT TUT ====

# The test builtin command returns 0 (True) or 1 (False), depending on the evaluation of an expression.
# square brackets: test expr and [expr] are equivalent.
test 3 -gt 1 || echo false

test 3 -gt 4
echo $?

[ 3 -gt 1 ]
echo $?

test 3 -gt 4
echo $?

FALSY_VAL="asd"

# is not falsy value
[ -n $FALSY_VAL ]
echo $?

# is falsy value
[ -z $FALSY_VAL ]
echo $?