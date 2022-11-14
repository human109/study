package iteration

import "strings"

func Repeat(character string, nums int) string {
	repeated := strings.Repeat(character, nums)
	return repeated
}
